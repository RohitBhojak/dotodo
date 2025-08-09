import { loadTodoList } from "./loadTodoList";
import handleProjectModal from "./handleProjectModal";
import handleTodoModal from "./handleTodoModal";
import app from "../../index.js";

export default function setupEvents() {
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
    } else if (event.target.closest(".todo")) {
      // Expand todo event
      handleExpandTodo(event);
    }
  });

  // Setup event listener for new project modal
  handleProjectModal();

  // Setup event listener for new todo modal
  handleTodoModal();
}

function handleDeleteProject(event) {
  const project = event.target.parentElement;
  const title = project.querySelector(".title").textContent;
  app.deleteProject(title);
  project.remove();
  // Load todo list of active project/highlight
  let active = document.querySelector(".active");
  if (!active) {
    // if active is deleted set Tasks as active
    active = document.querySelector(".highlight .title");
    active.classList.add("active");
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
  app.removeTodoFromProject(parent, id);
  todo.remove();
}

function handleToggleTodo(event) {
  const todo = event.target.closest(".todo");
  const parent = todo.dataset.parent;
  const id = todo.dataset.id;

  app.toggleTodoFromProject(parent, id);
  todo.classList.toggle("done");
  console.log(app);
}

function handleExpandTodo(event) {
  const todo = event.target.closest(".todo");
  todo.classList.toggle("expanded");
}
