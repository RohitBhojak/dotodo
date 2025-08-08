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

  updateStorage() {
    storeProjectList(this.projectList);
  }
}
