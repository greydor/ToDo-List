import projectList from "./projectList";
import { renderTaskList, hideTaskList } from "./renderTask";
import resetProjectRender from "./resetProjectRender";

const projectsListEl = document.querySelector(".projects-content");
const defaultProjectEl = document.querySelector(".projects-item");

function renderProjects() {
    projectList.get().forEach((project, index) => {
        const projectEl = defaultProjectEl.cloneNode(true);
        const projectNameEl = projectEl.querySelector("input");

        projectNameEl.value = project.title;
        projectEl.setAttribute("data-index", index);
        projectsListEl.appendChild(projectEl);

        const dataIndex = projectEl.getAttribute("data-index");

        const btnRenameAccept = projectEl.querySelector(
            ".btn-project-rename-accept"
        );
        const btnRename = projectEl.querySelector(".btn-project-rename");
        btnRename.addEventListener("click", () => {
            resetProjectRender();
            projectNameEl.classList.add("edit-project-name");
            projectNameEl.classList.remove("projects-item-name");
            projectNameEl.removeAttribute("readonly");
            btnRename.style.display = "none";
            btnRenameAccept.style.display = "inline";
        });

        btnRenameAccept.addEventListener("click", () => {
            // Update project name
            const newProjectName = projectNameEl.value;
            projectList.get()[dataIndex].title = newProjectName;

            btnRename.style.display = "inline";
            btnRenameAccept.style.display = "none";
            projectNameEl.setAttribute("readonly", "");
            projectNameEl.classList.remove("edit-project-name");
            projectNameEl.classList.add("projects-item-name");
            projectList.activeIndex = 0;
        });

        const btnDelete = projectEl.querySelector(".btn-project-delete");
        btnDelete.addEventListener("click", () => {
            // Prevent deleting last project
            if (!projectList.get()[1]) {
                return;
            }
            projectList.remove(dataIndex);
            hideProjects();
            renderProjects();
            projectList.activeIndex = 0;
            hideTaskList();
            renderTaskList();
            highlightActiveProject();
        });

        projectNameEl.addEventListener("click", () => {
            projectList.activeIndex = dataIndex;
            hideTaskList();
            renderTaskList();
            highlightActiveProject();
        });
    });
}

function highlightActiveProject() {
    try {
        document
            .querySelector(".active-project")
            .classList.remove("active-project");
    } catch (TypeError) {
        // Pass
    }

    const active = document.querySelector(
        `li[data-index="${projectList.activeIndex}"]`
    );
    active.classList.add("active-project");
}

function hideProjects() {
    while (projectsListEl.firstChild) {
        projectsListEl.removeChild(projectsListEl.firstChild);
    }
}

export { hideProjects, renderProjects, highlightActiveProject };
