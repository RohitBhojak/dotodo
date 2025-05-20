import todoUtil from "../utils/todoUtil";
import projectUtil from "../utils/projectUtil";
import ls from "../utils/storage";

export default function display() {
  const pids = ls.getPids();
  for (let pid of pids) {
    ls.removeProject(pid);
  }
  const p1 = projectUtil.createProject("p1");
  const todo1 = todoUtil.createTodo(
    p1.pid,
    "a",
    "b",
    "2025-01-01",
    "low",
    false,
  );
  const todo2 = todoUtil.createTodo(
    p1.pid,
    "e",
    "f",
    "2025-01-01",
    "medium",
    false,
  );
  projectUtil.addTodo(todo1);
  projectUtil.addTodo(todo2);

  const p2 = projectUtil.createProject("p2");
  const todo4 = todoUtil.createTodo(
    p2.pid,
    "i",
    "j",
    "2025-08-08",
    "high",
    false,
  );
  const todo3 = todoUtil.createTodo(
    p2.pid,
    "p",
    "o",
    "2025-08-08",
    "medium",
    true,
  );
  projectUtil.addTodo(todo3);
  projectUtil.addTodo(todo4);

  console.log(JSON.stringify(ls.getProjectList()));
  console.log(ls.getPids());

  const list = ls.getProjectList().flatMap((project) => project.list);
  console.log(JSON.stringify(list));
}
