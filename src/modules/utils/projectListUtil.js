import ls from "./storage";

const projectListUtil = (function () {
  const projects = ls.retrieveAll();

  function addProject(project) {
    if (projects.indexOf(project) === -1) {
      projects.push(project);
      ls.store(project.title, JSON.stringify(project));
    } else {
      alert("Project already exists");
    }
  }

  function removeProject(project) {
    projects.splice(projects.indexOf(project), 1);
    ls.remove(project.title);
  }

  function updateProject(project) {
    ls.store(project.title, JSON.stringify(project));
  }

  return {
    addProject,
    removeProject,
    updateProject,
  };
})();

export default projectListUtil;
