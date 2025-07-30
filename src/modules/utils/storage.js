// check availability
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

const isAvailable = storageAvailable("localStorage");

// Store project in local storage
function storeProject(project) {
  if (!isAvailable) return false;
  localStorage.setItem(project.title, JSON.stringify(project));
  if (!storageAvailable("localStorage"))
    alert("Storage full, delete todo to free space");
  return true;
}

// Remove project from storage
function removeProject(project) {
  if (!isAvailable) return false;
  localStorage.removeItem(project.title);
  return true;
}

// Get all projects
function getProjectList() {
  if (!isAvailable) return false;
  const projectList = [];
  for (let title in localStorage) {
    projectList.push(JSON.parse(localStorage.getItem(title)));
  }
  return projectList;
}

export { storeProject, removeProject, getProjectList };
