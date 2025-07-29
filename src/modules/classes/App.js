import { storeProject, removeProject } from "../utils/storage";

export class App {
  constructor() {
    this.projectList = [];
  }

  // Add project to list
  addProject(project) {
    this.projectList.push(project);
    storeProject(project);
  }

  deleteProject(project) {
    const index = this.projectList.findIndex(project);
    this.projectList.splice(index, 1);
    removeProject();
  }

  getProject(pid) {
    return this.projectList.find((project) => project.pid === pid);
  }
}
