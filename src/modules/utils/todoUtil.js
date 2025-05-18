import Todo from "../classes/todoClass.js";

const todoUtil = (function () {
  function createTodo(pid, title, description, dueDate, priority, isDone) {
    const todo = new Todo(title, description, dueDate, priority, isDone);
    Object.assign(todo, { pid: pid });
    return todo;
  }

  function toggleTodo(todo) {
    todo.isDone = !todo.isDone;
  }

  return {
    createTodo,
    toggleTodo,
  };
})();

export default todoUtil;
