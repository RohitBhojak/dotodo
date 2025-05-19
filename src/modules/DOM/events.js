import loadTodo from "./loadTodo";
import projectUtil from "../utils/projectUtil";
import todoUtil from "../utils/todoUtil";
import loadProjectList from "./loadProjectList";

const left = document.querySelector(".left");
left.addEventListener("click", (e) => {
  if (e.target.matches(".deleteProject")) {
    const project = e.target.closest(".project");
    const pid = project.dataset.pid;
    projectUtil.removeProject(pid);
    loadProjectList();
  } else if (e.target.matches("button")) {
    left.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    loadTodo(e.target.id || e.target.dataset.pid);
  }
});

const right = document.querySelector(".right");
right.addEventListener("click", (e) => {
  if (e.target.matches(".deleteTodo")) {
    const todo = e.target.closest(".todo");
    const pid = todo.dataset.pid;
    const id = todo.dataset.id;
    projectUtil.removeTodo(pid, id);
    const active = left.querySelector(".active");
    loadTodo(active.id || active.pid);
  } else if (e.target.matches(".toggle")) {
    const todo = e.target.closest(".todo");
    todoUtil.toggleTodo(todo);
  }
});
