import { format, isPast, isToday } from "date-fns";
import ls from "../utils/storage";

function createTodoNode(todo) {
  const node = document.createElement("li");
  node.dataset.pid = todo.pid;
  node.dataset.id = todo.id;
  node.classList.add("todo");

  const toggle = document.createElement("button");
  toggle.classList.add("toggle");
  if (todo.isDone) todo.classList.add("done");
  node.appendChild(toggle);

  const title = document.createElement("span");
  title.classList.add("title");
  title.textContent = todo.title;
  node.appendChild(title);

  const dueDate = document.createElement("span");
  dueDate.classList.add("dueDate");
  dueDate.textContent = format(new Date(todo.dueDate), "dd/MM/yyyy");
  node.appendChild(dueDate);

  const deleteTodo = document.createElement("button");
  deleteTodo.classList.add("deleteTodo");
  node.appendChild(deleteTodo);

  return node;
}

function loadTodoList(check) {
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

function loadOneTodo(todo) {
  const todoList = document.querySelector("#todo-list");
  todoList.appendChild(createTodoNode(todo));
}

export { loadTodoList, loadOneTodo };
