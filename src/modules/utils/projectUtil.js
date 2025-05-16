import Project from "../classes/projectClass.js";
import projectListUtil from "./projectListUtil.js";

const projectUtil = (function () {
  const currentProject = document.querySelector(".project.active");
  function createProject(title, description) {
    const project = new Project(title, description);
    projectListUtil.addProject(project);
  }
  function addTodo(todo) {
    currentProject.list.push(todo);
  }

  function removeTodo(todo) {
    currentProject.list.splice(currentProject.list.indexOf(todo), 1);
  }

  return {
    createProject,
    addTodo,
    removeTodo,
  };
})();

export default projectUtil;
