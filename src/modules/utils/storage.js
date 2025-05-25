const ls = (function () {
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
    localStorage.setItem(project.pid, JSON.stringify(project));
  }

  function retrieveProject(pid) {
    return JSON.parse(localStorage.getItem(pid));
  }

  function removeProject(pid) {
    localStorage.removeItem(pid);
  }

  // Get all project IDs
  function getPids() {
    return Object.keys(localStorage);
  }

  // Get all projects
  function getProjectList() {
    const projectList = [];
    getPids().map((pid) => projectList.push(retrieveProject(pid)));
    return projectList;
  }

  return {
    storeProject,
    retrieveProject,
    removeProject,
    getPids,
    getProjectList,
    isAvailable,
  };
})();

export default ls;
