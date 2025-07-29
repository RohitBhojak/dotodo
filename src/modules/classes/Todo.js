export default class Todo {
  constructor(parent, title, description, dueDate, priority, isDone = false) {
    this.parent = parent;
    this.tid = Date.now(); // Todo ID
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = isDone;
  }
}
