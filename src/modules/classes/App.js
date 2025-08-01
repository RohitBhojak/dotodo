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
    const index = this.projectList.findIndex(
      (project) => project.title === title,
    );
    const project = this.projectList[index];
    this.projectList.splice(index, 1);
    removeProject(project);
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
}
