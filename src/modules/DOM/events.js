import loadTodo from "./loadTodo";
import projectUtil from "../utils/projectUtil";

const left = document.querySelector(".left");
left.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
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
  }
});
