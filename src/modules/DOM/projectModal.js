import projectUtil from "../utils/projectUtil";

const projectModal = (function () {
  const dialog = document.querySelector("#newProject");
  dialog.showModal();
  dialog.addEventListener("submit", () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    projectUtil.createProject(title, description);
    dialog.close();
  });
})();

export default projectModal;
