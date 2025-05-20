import ls from "../utils/storage";

function createProjectNode(project) {
  const node = document.createElement("li");
  node.dataset.pid = project.pid;
  node.classList.add("project");

  const button = document.createElement("button");
  button.classList.add("title");
  button.textContent = project.title;
  node.appendChild(button);
  // Don't add delete button for default project
  if (project.id != 0) {
    const deleteProject = document.createElement("button");
    deleteProject.classList.add("deleteProject");
    node.appendChild(deleteProject);
  }

  return node;
}

const projects = document.querySelector(".projects");
function loadProjectList() {
  projects.innerHTML = "";
  const projectList = ls.getProjectList();
  projectList.forEach(loadProject);
}

function loadProject(project) {
  projects.appendChild(createProjectNode(project));
}

export { loadProjectList, loadProject };
