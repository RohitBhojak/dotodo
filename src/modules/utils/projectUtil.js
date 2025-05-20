import Project from "../classes/projectClass";
import ls from "./storage";

const projectUtil = (function () {
  function createProject(title) {
    const project = new Project(title);
    ls.storeProject(project);
    return project;
  }

  function addTodo(todo) {
    const project = ls.retrieveProject(todo.pid);
    project.list.push(todo);
    ls.storeProject(project);
  }

  function removeTodo(pid, tid) {
    const project = ls.retrieveProject(pid);
    const index = project.list.findIndex((todo) => todo.id === tid);
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
