export default class Todo {
  constructor(
    parent,
    title,
    description,
    dueDate,
    priority,
    isDone = false,
    id = Date.now(),
  ) {
    this.parent = parent;
    this.id = id; // Todo ID
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = isDone;
  }
}
