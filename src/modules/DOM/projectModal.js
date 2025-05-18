import projectUtil from "../utils/projectUtil";

export default function projectModal() {
  const dialog = document.querySelector("#newProject");
  dialog.showModal();
  dialog.addEventListener("submit", () => {
    const title = document.querySelector("#title").value;
    projectUtil.createProject(title);
    dialog.close();
  });
}
