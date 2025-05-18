import Project from "../classes/projectClass.js";
import ls from "./storage.js";

const projectUtil = (function () {
  function createProject(title) {
    const project = new Project(title);
    ls.storeProject(project);
  }
  function addTodo(todo) {
    const project = ls.retrieveProject(todo.pid);
    project.list.push(todo);
    ls.storeProject(project);
  }

  function removeTodo(todo) {
    const project = ls.retrieveProject(todo.pid);
    const index = project.list.indexOf(todo);
    project.list.splice(index, 1);
    ls.storeProject(project);
  }

  return {
    createProject,
    addTodo,
    removeTodo,
  };
})();

export default projectUtil;
