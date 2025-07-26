import Todo from "../classes/todoClass";
import projectUtil from "../utils/projectUtil";
import { getPids, getProjectList } from "../utils/storage";
import { loadProjectList } from "./loadProjectList";

export default function display() {
  if (getPids().length === 0) {
    projectUtil.createDefaultProject();
  }

  document.addEventListener("DOMContentLoaded", () => {
    loadProjectList();
  });

  // const p1 = projectUtil.createProject("p1");
  // const todo1 = new Todo(
  //   p1.pid,
  //   "a",
  //   "b",
  //   "2025-01-01",
  //   "low",
  //   false,
  // );
  // const todo2 = new Todo(
  //   p1.pid,
  //   "e",
  //   "f",
  //   "2025-01-01",
  //   "medium",
  //   false,
  // );
  // projectUtil.addTodo(todo1);
  // projectUtil.addTodo(todo2);

  // const p2 = projectUtil.createProject("p2");
  // const todo4 = new Todo(
  //   p2.pid,
  //   "i",
  //   "j",
  //   "2025-08-08",
  //   "high",
  //   false,
  // );
  // const todo3 = new Todo(
  //   p2.pid,
  //   "p",
  //   "o",
  //   "2025-08-08",
  //   "medium",
  //   true,
  // );
  // projectUtil.addTodo(todo3);
  // projectUtil.addTodo(todo4);

  console.log(JSON.stringify(getProjectList()));
  console.log(getPids());

  const list = getProjectList().flatMap((project) => project.list);
  console.log(JSON.stringify(list));
}
