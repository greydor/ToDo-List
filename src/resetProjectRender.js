import projectList from "./projectList";

function resetProjectRender() {
  // Used to reset the GUI when a user is creating or editing a project
  // and then cancels with another action.

  const btnRenameList = document.querySelectorAll(".btn-project-rename");
  const btnRenameAcceptList = document.querySelectorAll(
    ".btn-project-rename-accept"
  );
  const projectsToReset = document.querySelectorAll(".edit-project-name");
  const newProject = document.querySelector(".new-project-temp");

  // Revert project edit buttons to default visibility
  btnRenameList.forEach((btn) => {
    btn.style.display = "inline";
  });
  btnRenameAcceptList.forEach((btn) => {
    btn.style.display = "none";
  });

  projectsToReset.forEach((project) => {
    // Revert project elements to default css classes
    project.classList.remove("edit-project-name");
    project.classList.add("projects-item-name");

    // Undo project name change if cancelled
    const index = project.parentNode.getAttribute("data-index");
    try {
      project.value = projectList.get()[index].title;
    } catch (ValueError) {
      // Pass
    }
  });

  // Remove new project if cancelled
  if (newProject) {
    newProject.parentNode.remove();
  }
}

export default resetProjectRender;
