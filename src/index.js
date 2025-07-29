import display from "./modules/DOM/display";
import App from "./modules/classes/App";
import { getProjectList } from "./modules/utils/storage";
import "./css/styles.css";
import setupEvents from "./modules/DOM/events";
import Project from "./modules/classes/Project";

// Initialize app
const app = new App();

// Load projects from storage on startup
document.addEventListener("DOMContentLoaded", () => {
  // Get project list from storage
  const projectList = getProjectList();
  // Alert if storage is unavailable
  if (!projectList) {
    alert("Storage Unavailable, data will not be saved");
  }
  // Create default project if storage is unavailable or no projects exist
  if (!projectList || projectList.length === 0) {
    app.addProject(new Project("Default"));
    return;
  }
  // Initialize projects from storage
  projectList.forEach((project) =>
    app.addProject(new Project(project.title, project.todoList)),
  );
});
display();
setupEvents();
