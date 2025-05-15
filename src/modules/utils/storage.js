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

  // store
  function store(key, value) {
    if (storageAvailable("localStorage")) {
      localStorage.setItem(key, value);
      return true;
    } else {
      console.log("local storage not available");
      return false;
    }
  }

  // retrieve
  function retrieve(key) {
    if (storageAvailable("localStorage")) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      console.log("local storage not available");
      return false;
    }
  }

  // remove
  function remove(key) {
    if (storageAvailable("localStorage")) {
      localStorage.removeItem(key);
      return true;
    } else {
      console.log("local storage not available");
      return false;
    }
  }

  function getKeys() {
    if (storageAvailable("localStorage")) {
      const keys = Object.keys(localStorage);
      return keys;
    } else {
      console.log("local storage not available");
      return false;
    }
  }

  function retrieveAll() {
    const projects = [];
    if (storageAvailable("localStorage")) {
      const keys = getKeys();
      keys.forEach((key) => {
        const project = retrieve(key);
        projects.push(project);
      });
    } else {
      console.log("local storage not available");
    }
    return projects;
  }

  return {
    store,
    retrieve,
    retrieveAll,
    remove,
    getKeys,
  };
})();

export default ls;
