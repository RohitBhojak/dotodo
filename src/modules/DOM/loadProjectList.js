import { getProjectList } from "../utils/storage";

// Create a project node
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

// Load list of all projects to DOM
const projects = document.querySelector(".projects");
function loadProjectList() {
  projects.innerHTML = "";
  const projectList = getProjectList();
  projectList.forEach(loadProject);
}

// Load a single project to DOM
function loadProject(project) {
  projects.appendChild(createProjectNode(project));
}

export { loadProjectList, loadProject };
