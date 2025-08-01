import { storeProject } from "../utils/storage";

export default class Project {
  constructor(title, todoList = []) {
    this.title = title;
    this.todoList = todoList;
  }

  // Add todo to todoList
  addTodo(todo) {
    this.todoList.push(todo);
    storeProject(this);
  }

  // Remove todo from todoList
  removeTodo(id) {
    const index = this.todoList.findIndex((todo) => todo.id === id);
    this.todoList.splice(index, 1);
    storeProject(this);
  }

  toggleTodo(id) {
    const todo = this.todoList.find((todo) => todo.id === id);
    todo.isDone = !todo.isDone;
    storeProject(this);
  }
}
