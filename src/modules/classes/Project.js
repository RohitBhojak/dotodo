import { storeProject } from "./storage";

export default class Project {
  constructor(title) {
    this.pid = Date.now(); // Project ID
    this.title = title;
    this.todoList = [];
  }

  // Add todo to todoList
  addTodo(todo) {
    this.todoList.push(todo);
    storeProject(JSON.stringify(this));
  }

  // Remove todo from todoList
  removeTodo(todo) {
    const index = this.todoList.findIndex(todo);
    this.todoList.splice(index, 1);
    storeProject(JSON.stringify(this));
  }
}
