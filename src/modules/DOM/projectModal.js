import Project from "../classes/Project";

export default function projectModal() {
  const dialog = document.querySelector("#newProject");
  dialog.showModal();
  dialog.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const project = new Project(title);
    dialog.reset();
    dialog.close();
    return project;
  });

  dialog.querySelector(".cancel").addEventListener("click", () => {
    dialog.close();
    return null;
  });
}
