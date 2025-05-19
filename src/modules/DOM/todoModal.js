import todoUtil from "../utils/todoUtil";
import projectUtil from "../utils/projectUtil";

export default function todoModal() {
  const dialog = document.querySelector("#newTodo");
  dialog.showModal();
  dialog.addEventListener("submit", () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#dueDate").value;
    const priority = document.querySelector("#priority").value;
    const isDone = document.querySelector("#isDone").checked;
    const activeProject = document.querySelector(".project.active");
    const pid = activeProject ? activeProject.dataset.pid : 0;

    const todo = todoUtil.createTodo(
      pid,
      title,
      description,
      dueDate,
      priority,
      isDone,
    );
    projectUtil.addTodo(todo);
    dialog.reset();
    dialog.close();
  });

  dialog.querySelector(".cancel").addEventListener("click", () => {
    dialog.close();
  });
}
