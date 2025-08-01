import { storeProject, removeProject } from "../utils/storage";

export default class App {
  constructor() {
    this.projectList = [];
  }

  // Add project to list
  addProject(project) {
    if (this.getProject(project.title)) return false; // Don't add project if it already exists
    this.projectList.push(project);
    storeProject(project);
  }

  // Delete project from list
  deleteProject(title) {
    const project = this.getProject(title);
    const index = this.projectList.findIndex(project);
    this.projectList.splice(index, 1);
    removeProject(project);
  }

  // Get project from list
  getProject(title) {
    return this.projectList.find((project) => project.title === title);
  }

  // Get all projects
  getProjectList() {
    return this.projectList;
  }
}
