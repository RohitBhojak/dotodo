export default class Todo {
    constructor(title, description, dueDate, priority, isDone = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = isDone;
    }

    toggleDone() {
        this.isDone = !this.isDone;
    }

    log() {
        console.log(this);
    }
}