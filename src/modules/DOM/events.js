import App from "../classes/App";
import Project from "../classes/Project";
import { getProjectList } from "../utils/storage";
import { loadTodoList } from "./loadTodoList";
import { loadProjectList } from "./loadProjectList";
import handleProjectModal from "./handleProjectModal";
import handleTodoModal from "./handleTodoModal";

// Initialize app
const app = new App();
export default function setupEvents() {
  // Load projects from storage on startup
  document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

  // Event listener for left div
  const left = document.querySelector(".left");
  left.addEventListener("click", (event) => {
    if (event.target.matches(".deleteProject")) {
      // Delete project event
      handleDeleteProject(event);
    } else if (event.target.matches(".title")) {
      // Load todo list of project/highlight event
      handleLoadTodoList(event);
    }
  });

  // Event listener for right div
  const right = document.querySelector(".right");
  right.addEventListener("click", (event) => {
    if (event.target.matches(".deleteTodo")) {
      // Delete todo event
      handleDeleteTodo(event);
    } else if (event.target.matches(".toggle")) {
      // Toggle todo event
      handleToggleTodo(event);
    }
  });

  // Setup event listener for new project modal
  handleProjectModal(app);

  // Setup event listener for new todo modal
  handleTodoModal(app);
}

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

function handleDeleteProject(event) {
  const project = event.target.parentElement;
  const title = project.querySelector(".title").textContent;
  app.deleteProject(title);
  project.remove();
  // Load todo list of active project/highlight
  const active = document.querySelector(".active");
  if (active === null) {
    // if active is deleted set Tasks as active
    document.querySelector(".highlight .title").classList.add("active");
  }
  loadTodoList(active.textContent, app);
}

function handleLoadTodoList(event) {
  document.querySelector(".active").classList.remove("active");
  event.target.classList.add("active");
  loadTodoList(event.target.textContent, app);
}

function handleDeleteTodo(event) {
  const todo = event.target.closest(".todo");
  const parent = todo.dataset.parent;
  const id = todo.dataset.id;
  app.getProject(parent).removeTodo(id);
  todo.remove();
}

function handleToggleTodo(event) {
  const todo = event.target.closest(".todo");
  const parent = todo.dataset.parent;
  const id = todo.dataset.id;

  app.getProject(parent).toggleTodo(id);
  todo.classList.toggle("done");
}
