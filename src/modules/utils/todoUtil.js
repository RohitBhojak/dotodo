import Todo from "../classes/todoClass.js";

const todoUtil = (function () {
  function createTodo(title, description, dueDate, priority, isDone) {
    const todo = new Todo(title, description, dueDate, priority, isDone);
    return todo;
  }

  function toggleTodo(todo) {
    todo.isDone = !todo.isDone;
  }

  function updateTodo(todo, title, description, dueDate, priority, isDone) {
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.priority = priority;
    todo.isDone = isDone;
  }

  return {
    createTodo,
    updateTodo,
    toggleTodo,
  };
})();

export default todoUtil;
