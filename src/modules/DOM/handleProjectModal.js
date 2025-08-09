import Project from "../classes/Project";
import { loadProject } from "./loadProjectList";
import app from "../../index.js";

export default function handleProjectModal() {
  const newProject = document.querySelector(".new-project");
  const projectModal = document.querySelector("#newProject");
  const projectForm = document.querySelector("#newProject form");
  const title = projectForm.querySelector("#title");

  // Validate title on input
  title.addEventListener("input", () => {
    title.setCustomValidity("");
    if (!validateProject(title)) {
      projectForm.reportValidity();
    }
  });

  // Event listener for new project button
  newProject.addEventListener("click", () => {
    projectModal.showModal();
  });

  // Event listener for form submission
  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Create project if form is valid
    if (title.validity.valid) {
      const project = new Project(title.value);
      app.addProject(project);
      loadProject(project);
    } else {
      projectForm.reportValidity();
      return;
    }
    projectForm.reset();
    projectModal.close();
  });

  // Event listener for form cancel
  const projectFormCancel = document.querySelector("#newProject .cancel");
  projectFormCancel.addEventListener("click", () => {
    projectModal.close();
  });

  function validateProject() {
    if (title.validity.valueMissing) {
      title.setCustomValidity("Title is required");
      return false;
    } else if (app.getProject(title.value)) {
      title.setCustomValidity("Project already exists");
      return false;
    }
    return true;
  }
}
