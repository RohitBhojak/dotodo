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

function storeProject(project) {
  if (!isAvailable) return false;
  localStorage.setItem(project.pid, JSON.stringify(project));
  return true;
}

function retrieveProject(pid) {
  if (!isAvailable) return false;
  return JSON.parse(localStorage.getItem(pid));
}

function removeProject(pid) {
  if (!isAvailable) return false;
  localStorage.removeItem(pid);
  return true;
}

// Get all project IDs
function getPids() {
  if (!isAvailable) return false;
  return Object.keys(localStorage);
}

// Get all projects
function getProjectList() {
  if (!isAvailable) return false;
  const projectList = [];
  getPids().map((pid) => projectList.push(retrieveProject(pid)));
  return projectList;
}

export {
  storeProject,
  retrieveProject,
  removeProject,
  getPids,
  getProjectList,
};
