import ls from "../utils/storage";

function createProjectNode(project) {
  const node = document.createElement("li");
  node.dataset.pid = project.pid;
  node.classList.add("project");

  const button = document.createElement("button");
  button.classList.add("title");
  button.textContent = project.title;
  node.appendChild(button);

  if (project.id != 0) {
    const deleteProject = document.createElement("button");
    deleteProject.classList.add("deleteProject");
    node.appendChild(deleteProject);
  }

  return node;
}

function loadProjectList() {
  const projects = document.querySelector(".projects");
  projects.innerHTML = "";
  const projectList = ls.getProjectList();
  projects.innerHTML = projectList.map(createProjectNode).join("");
}

function loadOneProject(project) {
  const projects = document.querySelector(".projects");
  projects.appendChild(createProjectNode(project));
}

export { loadProjectList, loadOneProject };
