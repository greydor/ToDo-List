import projectList from "./projectList";
import { renderProjects, hideProjects, resetProjectButtons } from "./renderProjects";

const projectsListEl = document.querySelector(".projects-content");
const defaultProjectEl = document.querySelector(".projects-item");
const btnAddProject = document.querySelector(".btn-add-project");
const newProjectEl = defaultProjectEl.cloneNode(true);

const projectNameEl = newProjectEl.querySelector("input");


const btnRename = newProjectEl.querySelector(".btn-project-rename");
const btnRenameAccept = newProjectEl.querySelector(
    ".btn-project-rename-accept"
);

function newProjectHandler() {
    
    btnAddProject.addEventListener("click", () => {
        resetProjectButtons()
        projectNameEl.value = ""
        projectsListEl.prepend(newProjectEl);

        projectNameEl.setAttribute("placeholder", "Enter Name");
        projectNameEl.classList.add("edit-project-name");
        projectNameEl.classList.remove("projects-item-name");
        projectNameEl.removeAttribute("readonly");
        btnRename.style.display = "none";
        btnRenameAccept.style.display = "inline";
        
    });

    btnRenameAccept.addEventListener("click", () => {
        const newProjectName = projectNameEl.value;
        if (newProjectName === "") {
            return
        }
        projectList.add(newProjectName);

        btnRename.style.display = "inline";
        btnRenameAccept.style.display = "none";
        projectNameEl.setAttribute("readonly", "");
        projectNameEl.classList.remove("edit-project-name");
        projectNameEl.classList.add("projects-item-name");

        hideProjects()
        renderProjects()
    });
}

export default newProjectHandler;
