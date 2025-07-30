import { loadTodoList, loadTodo } from "./loadTodoList";
import { loadProject } from "./loadProjectList";
import projectModal from "./projectModal";
import todoModal from "./todoModal";

export default function setupEvents(app) {
  // Event listener for left nav
  const left = document.querySelector(".left");
  left.addEventListener("click", (e) => {
    // Delete project event
    if (e.target.matches(".deleteProject")) {
      const project = e.target.closest(".project");
      app.deleteProject(project.textContent);
      project.remove();
    } else if (e.target.matches("button")) {
      // Load todo list of project event
      left.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      loadTodoList(e.target.parentNode.textContent);
    }
  });

  // Event listener for right nav
  const right = document.querySelector(".right");
  right.addEventListener("click", (e) => {
    // Delete todo event
    if (e.target.matches(".deleteTodo")) {
      const todo = e.target.closest(".todo");
      const parent = todo.dataset.parent;
      const id = todo.dataset.id;
      app.getProject(parent).removeTodo(id);
      todo.remove();
    } else if (e.target.matches(".toggle")) {
      // Toggle todo event
      const todo = e.target.closest(".todo");
      const parent = todo.dataset.parent;
      const id = todo.dataset.id;
      app.getProject(parent).toggleTodo(id);
      todo.classList.toggle("done");
    }
  });

  // Event listener for new project modal
  const newProject = document.querySelector(".newProject");
  newProject.addEventListener("click", () => {
    const project = projectModal();
    if (project) {
      app.addProject(project);
      loadProject(project);
    }
  });

  // Event listener for new todo modal
  const newTodo = document.querySelector(".newTodo");
  newTodo.addEventListener("click", () => {
    const todo = todoModal();
    if (todo) {
      app.getProject(todo.parent).addTodo(todo);
      loadTodo(todo);
    }
  });
}
