import todoUtil from "../utils/todoUtil.js";
import projectUtil from "../utils/projectUtil.js";
import ls from "../utils/storage.js";

export default function display() {
  const pids = ls.getPids();
  for (let pid of pids) {
    ls.removeProject(pid);
  }
  const p1 = projectUtil.createProject("p1");
  const todo1 = todoUtil.createTodo(p1.pid, "a", "b", "c", "d", false);
  const todo2 = todoUtil.createTodo(p1.pid, "e", "f", "g", "h", false);
  projectUtil.addTodo(todo1);
  projectUtil.addTodo(todo2);

  const p2 = projectUtil.createProject("p2");
  const todo4 = todoUtil.createTodo(p2.pid, "i", "j", "k", "l", false);
  const todo3 = todoUtil.createTodo(p2.pid, "p", "o", "n", "m", true);
  projectUtil.addTodo(todo3);
  projectUtil.addTodo(todo4);

  console.log(JSON.stringify(ls.getProjectList()));
  console.log(ls.getPids());

  const list = ls.getProjectList().flatMap((project) => project.list);
  console.log(JSON.stringify(list));
}
