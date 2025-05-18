export default class Todo {
  constructor(title, description, dueDate, priority, isDone = false) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = isDone;
  }
}
