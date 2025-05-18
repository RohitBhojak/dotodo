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

  // store
  function storeProject(pid, project) {
    localStorage.setItem(pid, JSON.stringify(project));
  }

  // retrieve
  function retrieveProject(pid) {
    return JSON.parse(localStorage.getItem(pid));
  }

  // remove
  function removeProject(pid) {
    localStorage.removeItem(pid);
  }

  function getPids() {
    return Object.getKeys(localStorage);
  }

  return {
    storeProject,
    retrieveProject,
    removeProject,
    getPids,
    isAvailable,
  };
})();

export default ls;
