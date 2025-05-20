import { loadTodoList, loadTodo } from "./loadTodoList";
import { loadProjectList, loadProject } from "./loadProjectList";
import projectUtil from "../utils/projectUtil";
import todoUtil from "../utils/todoUtil";
import todoModal from "./todoModal";
import ls from "../utils/storage";
import projectModal from "./projectModal";

export default function setupEvents() {
  const left = document.querySelector(".left");
  left.addEventListener("click", (e) => {
    if (e.target.matches(".deleteProject")) {
      const project = e.target.closest(".project");
      const pid = project.dataset.pid;
      ls.removeProject(pid);
      project.remove();
    } else if (e.target.matches("button")) {
      left.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      loadTodoList(e.target.id || e.target.dataset.pid);
    }
  });

  const right = document.querySelector(".right");
  right.addEventListener("click", (e) => {
    if (e.target.matches(".deleteTodo")) {
      const todo = e.target.closest(".todo");
      const pid = todo.dataset.pid;
      const id = todo.dataset.id;
      projectUtil.removeTodo(pid, id);
      todo.remove();
    } else if (e.target.matches(".toggle")) {
      const todo = e.target.closest(".todo");
      todoUtil.toggleTodo(todo);
      todo.classList.toggle("done");
    }
  });

  //   const newTodo = document.querySelector(".newTodo");
  //   newTodo.addEventListener("click", () => {
  //     const todo = todoModal();
  //     if (todo) loadOneTodo(todo);
  //   });

  //   const newProject = document.querySelector(".newProject");
  //   newProject.addEventListener("click", () => {
  //     const project = projectModal();
  //     if (project) loadOneProject(project);
  //   });
}
