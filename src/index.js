import "./css/styles.css";
import setupEvents from "./modules/DOM/events";
import { getProjectList } from "./modules/utils/storage";
import App from "./modules/classes/App";
import Project from "./modules/classes/Project";
import Todo from "./modules/classes/Todo";
import { loadProjectList } from "./modules/DOM/loadProjectList";
import { loadTodoList } from "./modules/DOM/loadTodoList";

// Initialize app
const app = new App();
// Load projects from storage on startup
document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

setupEvents();

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
    populateAppWithTutorial();
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

function populateAppWithTutorial() {
  const today = new Date();
  const tutorial = new Project("Tutorial");
  let id = 0;

  tutorial.addTodo(
    new Todo(
      "Tutorial",
      "Click Any To-Do to Expand!",
      "This is a tutorial to get you started. The description expands and collapses when you click the to-do. Click the [ ] toggle to mark it as done.",
      today,
      "high",
      false,
      id++,
    ),
  );
  tutorial.addTodo(
    new Todo(
      "Tutorial",
      "Priorities are Color-Coded",
      "High-priority tasks are highlighted in red, medium-priority tasks are yellow, and low-priority tasks are the default green.",
      today,
      "high",
      false,
      id++,
    ),
  );
  tutorial.addTodo(
    new Todo(
      "Tutorial",
      "Use Highlights and Projects",
      "Highlights curate to-dos from all of your projects. Projects contain their own separate to-do lists. Click the '+' button to create new projects.",
      today,
      "medium",
      false,
      id++,
    ),
  );
  tutorial.addTodo(
    new Todo(
      "Tutorial",
      "Create To-Dos in the Active Project",
      "New to-dos are created inside the currently selected project. If a Highlight is active, the to-do will be created in the 'Default' project instead.",
      today,
      "medium",
      false,
      id++,
    ),
  );
  tutorial.addTodo(
    new Todo(
      "Tutorial",
      "The 'RM' Button Deletes a To-Do",
      "Click the 'RM' button to permanently delete a single to-do.",
      today,
      "low",
      false,
      id++,
    ),
  );
  tutorial.addTodo(
    new Todo(
      "Tutorial",
      "The 'RMDIR' Button Deletes a Project",
      "This will delete the entire project and all of its to-dos. Feel free to delete this 'Tutorial' project when you are finished. The 'Default' project cannot be deleted.",
      today,
      "low",
      false,
      id++,
    ),
  );

  app.addProject(tutorial);
}
