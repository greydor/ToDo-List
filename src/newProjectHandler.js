import projectList from "./projectList";
import { renderProjects, hideProjects } from "./renderProjects";
import resetProjectRender from "./resetProjectRender";
import { renderTaskList, hideTaskList } from "./renderTask";

const projectsListEl = document.querySelector(".projects-content");
const defaultProjectEl = document.querySelector(".projects-item");
const btnAddProject = document.querySelector(".btn-add-project");
const newProjectEl = defaultProjectEl.cloneNode(true);

const projectNameEl = newProjectEl.querySelector("input");

const projectsWindow = document.querySelector(".projects")

const btnRename = newProjectEl.querySelector(".btn-project-rename");
const btnRenameAccept = newProjectEl.querySelector(
    ".btn-project-rename-accept"
);

function newProjectHandler() {
    btnAddProject.addEventListener("click", () => {
        resetProjectRender();
        projectsWindow.scrollTo(0, 0);
        projectNameEl.value = "";
        projectsListEl.prepend(newProjectEl);

        projectNameEl.setAttribute("placeholder", "Enter Name");
        projectNameEl.classList.add("edit-project-name");
        projectNameEl.classList.remove("projects-item-name");
        projectNameEl.classList.add("new-project-temp");
        projectNameEl.removeAttribute("readonly");
        btnRename.style.display = "none";
        btnRenameAccept.style.display = "inline";
    });

    btnRenameAccept.addEventListener("click", () => {
        const newProjectName = projectNameEl.value;
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

        hideProjects();
        renderProjects();
        hideTaskList()
        renderTaskList()
    });
}

export default newProjectHandler;
