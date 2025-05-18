import projectUtil from "../utils/projectUtil";

const projectModal = (function () {
  const dialog = document.querySelector("#newProject");
  dialog.showModal();
  dialog.addEventListener("submit", () => {
    const title = document.querySelector("#title").value;
    projectUtil.createProject(title);
    dialog.close();
  });
})();

export default projectModal;
