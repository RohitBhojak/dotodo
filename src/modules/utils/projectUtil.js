import Project from "../classes/projectClass";
import { storeProject, retrieveProject } from "./storage";

// Create a new project
function createProject(title) {
  const project = new Project(title);
  storeProject(project);
  return project;
}

// Create default project
function createDefaultProject() {
  const project = new Project("Default");
  project.pid = 0;
  storeProject(project);
  return project;
}

// Add todo to its parent project
function addTodo(todo) {
  const project = retrieveProject(todo.pid);
  project.list.push(todo);
  storeProject(project);
}

// Remove todo based on pid and tid
function removeTodo(pid, tid) {
  const project = retrieveProject(pid);
  const index = project.list.findIndex((todo) => todo.id === tid);
  project.list.splice(index, 1);
  storeProject(project);
}

export { createProject, createDefaultProject, addTodo, removeTodo };
