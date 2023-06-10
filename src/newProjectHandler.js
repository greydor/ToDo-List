import projectList from "./projectList";
import {
  renderProjects,
  hideProjects,
  highlightActiveProject,
} from "./renderProjects";
import resetProjectRender from "./resetProjectRender";
import { renderTaskList, hideTaskList } from "./renderTask";
import { storeProjectList } from "./localDataStorage";

const projectsListEl = document.querySelector(".projects-content");
const defaultProjectEl = document.querySelector(".projects-item");
const btnAddProject = document.querySelector(".btn-add-project");

// Copy existing project node for the new project
const newProjectEl = defaultProjectEl.cloneNode(true);
const projectNameEl = newProjectEl.querySelector("input");

const projectsWindow = document.querySelector(".projects");

const btnDelete = newProjectEl.querySelector(".btn-project-delete");
const btnRename = newProjectEl.querySelector(".btn-project-rename");
const btnRenameAccept = newProjectEl.querySelector(
  ".btn-project-rename-accept"
);

function newProjectHandler() {
  // Add event listeners for new project buttons

  btnAddProject.addEventListener("click", () => {
    // Display and configure new project element
    resetProjectRender();

    // Add new project to top of window and scroll to top
    projectsWindow.scrollTo(0, 0);
    projectNameEl.value = "";
    projectsListEl.prepend(newProjectEl);

    projectNameEl.setAttribute("placeholder", "Enter Name");
    projectNameEl.classList.add("edit-project-name");
    projectNameEl.classList.remove("projects-item-name");
    projectNameEl.classList.add("new-project-temp");
    projectNameEl.removeAttribute("readonly");
    newProjectEl.setAttribute("data-index", "");
    btnRename.style.display = "none";
    btnRenameAccept.style.display = "inline";
  });

  btnRenameAccept.addEventListener("click", () => {
    // Add new project to projectList object and update page render

    const newProjectName = projectNameEl.value;

    // Do not allow project with no name
    if (newProjectName === "") {
      return;
    }
    projectList.add(newProjectName);

    btnRename.style.display = "inline";
    btnRenameAccept.style.display = "none";
    projectNameEl.setAttribute("readonly", "");
    projectNameEl.classList.remove("edit-project-name");
    projectNameEl.classList.add("projects-item-name");
    projectNameEl.classList.remove("new-project-temp");

    // Set new project as active
    projectList.activeIndex = 0;

    hideProjects();
    renderProjects();
    hideTaskList();
    renderTaskList();
    highlightActiveProject();
    storeProjectList();
  });

  btnDelete.addEventListener("click", () => {
    hideProjects();
    renderProjects();
    highlightActiveProject();
  });
}

export default newProjectHandler;
