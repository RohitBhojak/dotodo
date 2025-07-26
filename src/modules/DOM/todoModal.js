import Todo from "../classes/todoClass";
import { addTodo } from "../utils/projectUtil";

export default function todoModal() {
  const dialog = document.querySelector("#newTodo");
  dialog.showModal();
  dialog.addEventListener("submit", (event) => {
    event.preventDefault();
    // get form values
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#dueDate").value;
    const priority = document.querySelector("#priority").value;
    const isDone = document.querySelector("#isDone").checked;
    const activeProject = document.querySelector(".project.active");

    // get project id, set to default if no project is active
    const pid = activeProject ? activeProject.dataset.pid : 0;

    // create todo
    const todo = new Todo(pid, title, description, dueDate, priority, isDone);
    addTodo(todo);
    dialog.reset();
    dialog.close();
    return todo;
  });

  dialog.querySelector(".cancel").addEventListener("click", () => {
    dialog.close();
    return null;
  });
}
