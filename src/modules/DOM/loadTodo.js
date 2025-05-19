import { format, isPast, isToday } from "date-fns";
import ls from "../utils/storage";

function createTodoNode(todo) {
  const node = document.createElement("li");
  node.dataset.pid = todo.pid;
  node.dataset.id = todo.id;
  node.innerHTML = `
        <button class="toggleDone">Done</button>
        <p>${todo.title}</p>
        <p>${format(new Date(todo.dueDate), "dd/MM/yyyy")}</p>
        <button class="deleteTodo">Delete</button>
    `;
  return node;
}

export default function loadTodo(check) {
  const todoList = document.querySelector("#todo-list");
  todoList.innerHTML = "";
  switch (check) {
    case "tasks":
      ls.getProjectList()
        .flatMap((project) => project.list.map(createTodoNode))
        .forEach((node) => todoList.appendChild(node));
      break;

    case "today":
      ls.getProjectList()
        .flatMap((project) => project.list)
        .filter((todo) => isToday(new Date(todo.dueDate)))
        .map(createTodoNode)
        .forEach((node) => todoList.appendChild(node));
      break;

    case "overdue":
      ls.getProjectList()
        .flatMap((project) => project.list)
        .filter((todo) => isPast(new Date(todo.dueDate)))
        .map(createTodoNode)
        .forEach((node) => todoList.appendChild(node));
      break;

    case "important":
      ls.getProjectList()
        .flatMap((project) => project.list)
        .filter((todo) => todo.priority === "high")
        .map(createTodoNode)
        .forEach((node) => todoList.appendChild(node));
      break;

    // in default case, pid of the project will be sent
    default: {
      ls.retrieveProject(check)
        .list.map(createTodoNode)
        .forEach((node) => todoList.appendChild(node));
    }
  }
}
