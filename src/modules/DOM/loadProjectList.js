// Create a project node
function createProjectNode(project) {
  const node = document.createElement("li");
  node.classList.add("project");

  const button = document.createElement("button");
  button.classList.add("title");
  button.textContent = project.title;
  node.appendChild(button);
  // Don't add delete button for default project
  if (project.textContent !== "Default") {
    const deleteProject = document.createElement("button");
    deleteProject.classList.add("deleteProject");
    node.appendChild(deleteProject);
  }

  return node;
}

// Load list of all projectListNode to DOM
const projectListNode = document.querySelector("#project-list");
function loadProjectList(app) {
  projectListNode.innerHTML = "";
  const projectList = app.getProjectList();
  projectList.forEach(loadProject);
}

// Load a single project to DOM
function loadProject(project) {
  projectListNode.appendChild(createProjectNode(project));
}

export { loadProjectList, loadProject };
