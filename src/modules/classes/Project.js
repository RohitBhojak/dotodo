export default class Project {
  constructor(title, todoList = []) {
    this.title = title;
    this.todoList = todoList;
  }

  // Add todo to todoList
  addTodo(todo) {
    this.todoList.push(todo);
  }

  // Remove todo from todoList
  removeTodo(id) {
    const index = this.todoList.findIndex(
      (todo) => Number(todo.id) === Number(id),
    );
    this.todoList.splice(index, 1);
  }

  toggleTodo(id) {
    const todo = this.todoList.find((todo) => Number(todo.id) === Number(id));
    todo.isDone = !todo.isDone;
  }
}
