import Todo from "../classes/Todo";
import { loadTodo } from "./loadTodoList";

export default function handleTodoModal(app) {
  const newTodo = document.querySelector(".new-todo");
  const newTodoModal = document.querySelector("#newTodo");
  const todoForm = document.querySelector("#newTodo form");

  const title = todoForm.querySelector("#title");
  const description = todoForm.querySelector("#description");
  const dueDate = todoForm.querySelector("#dueDate");
  const priority = todoForm.querySelector("#priority");
  const isDone = todoForm.querySelector("#isDone");

  // Validate title on input
  title.addEventListener("input", () => {
    title.setCustomValidity("");
    if (title.validity.valueMissing) {
      title.setCustomValidity("Title is required");
      title.reportValidity();
    }
  });

  // Event listener for new todo button
  newTodo.addEventListener("click", () => {
    // Set due date to today by default
    const currentDate = new Date();
    dueDate.value = currentDate.toISOString().split("T")[0];
    newTodoModal.showModal();
  });

  // Event listener for form submission
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validate form
    if (title.validity.valid) {
      const parent = getParent();
      const todo = new Todo(
        parent,
        title.value,
        description.value,
        dueDate.value,
        priority.value,
        isDone.checked,
      );
      app.getProject(parent).addTodo(todo);
      app.updateStorage();
      loadTodo(todo);
    } else {
      title.reportValidity();
      return;
    }
    todoForm.reset();
    newTodoModal.close();
  });

  // Event listener for form cancel
  const todoFormCancel = document.querySelector("#newTodo .cancel");
  todoFormCancel.addEventListener("click", () => {
    newTodoModal.close();
  });
}

function getParent() {
  const active = document.querySelector(".active");
  // if highlight is active, use default project
  return active.parentElement.classList.contains("highlight")
    ? "Default"
    : active.textContent;
}
