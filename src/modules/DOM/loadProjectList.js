import ls from "../utils/storage";

function createProjectNode(project) {
  const node = `<li class="project">${project.title}</li>`;
  node.dataset.pid = project.pid;
  return node;
}

export default function loadProjectList() {
  const projects = document.querySelector(".projects");
  const projectList = ls.getProjectList();
  projects.innerHTML = projectList.map(createProjectNode).join("");
}
