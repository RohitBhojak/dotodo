import { storeProjectList } from "../utils/storage";

export default class App {
  constructor() {
    this.projectList = [];
  }

  // Add project to list
  addProject(project) {
    if (this.getProject(project.title)) return false; // Don't add project if it already exists
    this.projectList.push(project);
    this.updateStorage();
  }

  // Delete project from list
  deleteProject(title) {
    const index = this.projectList.findIndex(
      (project) => project.title === title,
    );
    this.projectList.splice(index, 1);
    this.updateStorage();
  }

  // Get project from list
  getProject(title) {
    const project = this.projectList.find((project) => project.title === title);
    return project;
  }

  // Get all projects
  getProjectList() {
    return this.projectList;
  }

  // Add todo to project
  addTodoToProject(title, todo) {
    this.getProject(title).addTodo(todo);
    this.updateStorage();
  }

  // Remove todo from project
  removeTodoFromProject(title, id) {
    this.getProject(title).removeTodo(id);
    this.updateStorage();
  }

  // Toggle todo from project
  toggleTodoFromProject(title, id) {
    this.getProject(title).toggleTodo(id);
    this.updateStorage();
  }

  updateStorage() {
    storeProjectList(this.projectList);
  }
}
