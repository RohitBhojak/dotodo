import todoUtil from "../utils/todoUtil.js";
import projectUtil from "../utils/projectUtil.js";
import ls from "../utils/storage.js";

export default function display() {
  const pids = ls.getPids();
  for (let pid of pids) {
    ls.removeProject(pid);
  }
  const project = projectUtil.createProject("test");
  const todo1 = todoUtil.createTodo(project.pid, "a", "b", "c", "d", false);
  const todo2 = todoUtil.createTodo(project.pid, "e", "f", "g", "h", false);
  projectUtil.addTodo(todo1);
  projectUtil.addTodo(todo2);
  console.log(JSON.stringify(ls.retrieveProject(project.pid)));
  console.log(ls.getProjectList());
  console.log(ls.getPids());
}
