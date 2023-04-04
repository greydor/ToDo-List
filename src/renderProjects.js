import projectList from "./projectList";
import { renderTaskList, hideTaskList } from "./renderTask";
import resetProjectRender from "./resetProjectRender";
import { storeProjectList } from "./localDataStorage";

const projectsListEl = document.querySelector(".projects-content");
// Initial project DOM element that serves as a template for new projects
const defaultProjectEl = document.querySelector(".projects-item");

function renderProjects() {
    // Render interactive list of all projects

    projectList.get().forEach((project, index) => {
        const projectEl = defaultProjectEl.cloneNode(true);
        const projectNameEl = projectEl.querySelector("input");

        // Render existing project name
        projectNameEl.value = project.title;
        // data-index matches the project index in projectList
        projectEl.setAttribute("data-index", index);
        projectsListEl.appendChild(projectEl);

        const btnRenameAccept = projectEl.querySelector(
            ".btn-project-rename-accept"
        );
        const btnRename = projectEl.querySelector(".btn-project-rename");

        // Toggle ability to rename project
        btnRename.addEventListener("click", () => {
            resetProjectRender();
            projectNameEl.classList.add("edit-project-name");
            projectNameEl.classList.remove("projects-item-name");
            projectNameEl.removeAttribute("readonly");
            btnRename.style.display = "none";
            btnRenameAccept.style.display = "inline";
        });

        // Accept and update project name
        btnRenameAccept.addEventListener("click", () => {
            const newProjectName = projectNameEl.value;
            projectList.get()[index].title = newProjectName;

            btnRename.style.display = "inline";
            btnRenameAccept.style.display = "none";
            projectNameEl.setAttribute("readonly", "");
            projectNameEl.classList.remove("edit-project-name");
            projectNameEl.classList.add("projects-item-name");
            projectList.activeIndex = 0;
            storeProjectList();
        });

        // Delete project
        const btnDelete = projectEl.querySelector(".btn-project-delete");
        btnDelete.addEventListener("click", () => {
            // Prevent deleting last project
            if (!projectList.get()[1]) {
                return;
            }
            projectList.remove(index);
            hideProjects();
            renderProjects();
            projectList.activeIndex = 0;
            hideTaskList();
            renderTaskList();
            highlightActiveProject();
            storeProjectList();
        });

        // Show project tasks when a project is selected
        projectNameEl.addEventListener("click", () => {
            projectList.activeIndex = index;
            hideTaskList();
            renderTaskList();
            highlightActiveProject();
        });
    });
}

// Add class to highlight currently selected project
function highlightActiveProject() {
    const activeProjectELs = document.querySelectorAll(".active-project");
    try {
        activeProjectELs.forEach((element) => {
            element.classList.remove("active-project");
        });
    } catch (TypeError) {
        // Pass
    }

    const active = document.querySelector(
        `li[data-index="${projectList.activeIndex}"]`
    );
    for (const element of active.children) {
        element.classList.add("active-project");
    }
}

function hideProjects() {
    while (projectsListEl.firstChild) {
        projectsListEl.removeChild(projectsListEl.firstChild);
    }
}

export { hideProjects, renderProjects, highlightActiveProject };
