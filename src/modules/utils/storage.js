// A single, namespaced key to store the entire project list
const PROJECTS_KEY = "DOTODO_projects";

// Helper function to check for storage availability
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
      storage &&
      storage.length !== 0
    );
  }
}

const isAvailable = storageAvailable("localStorage");

// Retrieves the entire list of projects from localStorage
function getProjectList() {
  if (!isAvailable) return false;

  const projectListData = localStorage.getItem(PROJECTS_KEY);

  // If no data exists, return an empty array.
  return projectListData ? JSON.parse(projectListData) : [];
}

// Stores the entire list of projects in localStorage
function storeProjectList(projectList) {
  if (!isAvailable) return false;

  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projectList));

  if (!storageAvailable("localStorage")) {
    alert("Storage full, delete items to free space");
  }

  return true;
}

export { getProjectList, storeProjectList };
