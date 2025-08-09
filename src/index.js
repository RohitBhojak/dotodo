import "./css/styles.css";
import setupEvents from "./modules/DOM/events";
import { getProjectList } from "./modules/utils/storage";
import App from "./modules/classes/App";
import Project from "./modules/classes/Project";
import { loadProjectList } from "./modules/DOM/loadProjectList";
import { loadTodoList } from "./modules/DOM/loadTodoList";

// Initialize app
const app = new App();
// Load projects from storage on startup
document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

setupEvents(app);

// export app instance
export default app;

function handleDOMContentLoaded() {
  // Get project list from storage
  const projectList = getProjectList();
  // Alert if storage is unavailable
  if (projectList === false) {
    alert("Storage Unavailable, data will not be saved");
  }
  // Create default project if storage is unavailable or no projects exist
  if (!projectList || projectList.length === 0) {
    app.addProject(new Project("Default"));
  } else {
    // Initialize projects from storage
    projectList.forEach((project) =>
      app.addProject(new Project(project.title, project.todoList)),
    );
  }
  // Load project list
  loadProjectList(app);
  // Load todo list of active project/highlight
  const active = document.querySelector(".active");
  loadTodoList(active.textContent, app);
}
