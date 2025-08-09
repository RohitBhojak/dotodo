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
  console.log(projectList);
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
  tutorial.addTodo;
  tutorial.addTodo(
    new Todo(
      "Tutorial",
      "Click the Todo to expand!",
      "This is a tutorial to get you started.\
      This is the description and it expands and cotllapses on clicking the todo.\
      Click the [] toggle it done.",
      today,
      "high",
      false,
      id++,
    ),
  );
  tutorial.addTodo(
    new Todo(
      "Tutorial",
      "Color coded todos, read description",
      "High Priority tasks are highlighted in red.\
      Medium priority tasks are highlighted in yellow.\
      Low priority tasks are highlighted in green.",
      today,
      "high",
      false,
      id++,
    ),
  );
  tutorial.addTodo(
    new Todo(
      "Tutorial",
      "Highlights and project lists",
      "Highlights curate todos from all projects.\
      Projects contain todo lists, click the add button to create new projects",
      today,
      "medium",
      false,
      id++,
    ),
  );
  tutorial.addTodo(
    new Todo(
      "Tutorial",
      "Create todos by clicking add todo button",
      "Todos are created inside the selected project.\
      If a highlight is active, then project will be created inside default",
      today,
      "medium",
      false,
      id++,
    ),
  );
  tutorial.addTodo(
    new Todo(
      "Tutorial",
      "RM deletes the todo",
      "Click the button to delete the todo",
      today,
      "low",
      false,
      id++,
    ),
  );
  tutorial.addTodo(
    new Todo(
      "Tutorial",
      "RMDIR deletes the whole project and its todos",
      "Delete the tutorial project after you are done reading the tutorial\
      Default project cannot be deleted",
      today,
      "low",
      false,
      id++,
    ),
  );

  app.addProject(tutorial);
}
