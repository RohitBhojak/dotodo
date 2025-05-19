import ls from "../utils/storage";

function createProjectNode(project) {
  const node = document.createElement("li");
  node.dataset.pid = project.pid;
  node.classList.add("project");

  const button = document.createElement("button");
  button.classList.add("title");
  button.textContent = project.title;
  node.appendChild(button);

  const deleteProject = document.createElement("button");
  deleteProject.classList.add("deleteProject");
  node.appendChild(deleteProject);

  return node;
}

export default function loadProjectList() {
  const projects = document.querySelector(".projects");
  const projectList = ls.getProjectList();
  projects.innerHTML = projectList.map(createProjectNode).join("");
}
