import todoUtil from "../utils/todoUtil";
import projectUtil from "../utils/projectUtil";

const todoModal = (function () {
  const dialog = document.querySelector("#newTodo");
  dialog.showModal();
  dialog.addEventListener("submit", () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#dueDate").value;
    const priority = document.querySelector("#priority").value;
    const isDone = document.querySelector("#isDone").checked;

    todoUtil.createTodo(title, description, dueDate, priority, isDone);
    projectUtil.addTodo(todoUtil.currentTodo);
    dialog.close();
  });
})();

export default todoModal;
