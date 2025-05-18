import todoUtil from "./utils/todoUtil.js";
import projectUtil from "./utils/projectUtil.js";
import ls from "./utils/storage.js";

const todo1 = todoUtil.createTodo(0, "a", "b", "c", "d", false);
const todo2 = todoUtil.createTodo(0, "e", "f", "g", "h", false);
projectUtil.createProject("test");
projectUtil.addTodo(todo1);
projectUtil.addTodo(todo2);
let pids = ls.getPids();
console.log(pids);
console.log(ls.retrieveProject(pids[0]));

projectUtil.removeTodo(todo1);
console.log(ls.retrieveProject(pids[0]));
