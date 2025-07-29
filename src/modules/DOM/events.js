import { loadTodoList } from "./loadTodoList";

export default function setupEvents(app) {
  const left = document.querySelector(".left");
  // Event listener for left nav
  left.addEventListener("click", (e) => {
    // Delete project event
    if (e.target.matches(".deleteProject")) {
      const project = e.target.closest(".project");
      app.deleteProject(project.textContent);
      project.remove();
    } else if (e.target.matches("button")) {
      // Load todo list of project
      left.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      loadTodoList(e.target.parentNode.textContent);
    }
  });

  const right = document.querySelector(".right");
  // Event listener for right nav
  right.addEventListener("click", (e) => {
    // Delete todo event
    if (e.target.matches(".deleteTodo")) {
      const todo = e.target.closest(".todo");
      const parent = todo.dataset.parent;
      const id = todo.dataset.id;
      app.getProject(parent).removeTodo(id);
      todo.remove();
    } else if (e.target.matches(".toggle")) {
      // Toggle todo
      const todo = e.target.closest(".todo");
      const parent = todo.dataset.parent;
      const id = todo.dataset.id;
      app.getProject(parent).toggleTodo(id);
      todo.classList.toggle("done");
    }
  });

  // const newTodo = document.querySelector(".newTodo");
  // newTodo.addEventListener("click", () => {
  //   const todo = todoModal();
  //   if (todo) {
  //   }
  // });

  // const newProject = document.querySelector(".newProject");
  // newProject.addEventListener("click", () => {
  //   const project = projectModal();
  //   if (project) loadProject(project);
  // });
}
