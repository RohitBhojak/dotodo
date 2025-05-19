import projectUtil from "../utils/projectUtil";

export default function projectModal() {
  const dialog = document.querySelector("#newProject");
  dialog.showModal();
  dialog.addEventListener("submit", () => {
    const title = document.querySelector("#title").value;
    projectUtil.createProject(title);
    dialog.reset();
    dialog.close();
  });
  dialog.querySelector(".cancel").addEventListener("click", () => {
    dialog.close();
  });
}
