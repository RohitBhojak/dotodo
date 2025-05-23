import Project from "../classes/projectClass";
import ls from "./storage";

const projectUtil = (function () {
  // Create a new project
  function createProject(title) {
    const project = new Project(title);
    ls.storeProject(project);
    return project;
  }

  // Create default project
  function createDefaultProject() {
    const project = new Project("Default");
    project.pid = 0;
    ls.storeProject(project);
    return project;
  }

  // Add todo to its parent project
  function addTodo(todo) {
    const project = ls.retrieveProject(todo.pid);
    project.list.push(todo);
    ls.storeProject(project);
  }

  // Remove todo based on pid and tid
  function removeTodo(pid, tid) {
    const project = ls.retrieveProject(pid);
    const index = project.list.findIndex((todo) => todo.id === tid);
    project.list.splice(index, 1);
    ls.storeProject(project);
  }

  return {
    createProject,
    createDefaultProject,
    addTodo,
    removeTodo,
  };
})();

export default projectUtil;
