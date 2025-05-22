export default class Todo {
  constructor(pid, title, description, dueDate, priority, isDone = false) {
    this.pid = pid;
    this.tid = Date.now(); // Todo ID
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = isDone;
  }
}
