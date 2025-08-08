import { format, differenceInCalendarDays, isToday } from "date-fns";

// Create a todo node
function createTodoNode(todo) {
  const node = document.createElement("li");
  node.dataset.parent = todo.parent;
  node.dataset.id = todo.id;
  node.classList.add("todo");

  // Add toggle button
  const toggle = document.createElement("button");
  toggle.classList.add("toggle");
  if (todo.isDone) node.classList.add("done");
  node.appendChild(toggle);

  // Add title
  const title = document.createElement("span");
  title.classList.add("title");
  title.textContent = todo.title;
  node.appendChild(title);

  // Add due date
  const dueDate = document.createElement("span");
  dueDate.classList.add("dueDate");
  dueDate.textContent = format(new Date(todo.dueDate), "dd/MM/yyyy");
  node.appendChild(dueDate);

  // Add delete button
  const deleteTodo = document.createElement("button");
  deleteTodo.classList.add("deleteTodo");
  node.appendChild(deleteTodo);

  // Add priority
  node.classList.add("priority-" + todo.priority);

  // Add description
  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = todo.description;
  node.appendChild(description);

  return node;
}

const todoListNode = document.querySelector("#todo-list");

// Load the complete todo list for the selected highlight/project
function loadTodoList(check, app) {
  todoListNode.innerHTML = "";
  switch (check) {
    case "Tasks":
      app
        .getProjectList()
        .flatMap((project) => project.todoList)
        .forEach(loadTodo);
      break;

    case "Today":
      app
        .getProjectList()
        .flatMap((project) => project.todoList)
        .filter((todo) => isToday(new Date(todo.dueDate)))
        .forEach(loadTodo);
      break;

    case "Overdue":
      app
        .getProjectList()
        .flatMap((project) => project.todoList)

        .filter(
          (todo) =>
            differenceInCalendarDays(new Date(todo.dueDate), new Date()) < 0 &&
            !todo.isDone,
        ) // Check if due date is before today and is not done

        .forEach(loadTodo);
      break;

    case "Important":
      app
        .getProjectList()
        .flatMap((project) => project.todoList)
        .filter((todo) => todo.priority === "high")
        .forEach(loadTodo);
      break;

    // in default case, title of the project will be sent
    default:
      app.getProject(check).todoList.forEach(loadTodo);
  }
}

// Load a single todo to DOM
function loadTodo(todo) {
  todoListNode.appendChild(createTodoNode(todo));
}

export { loadTodoList, loadTodo };
