import projectList from "./projectList";

const projectsListEl = document.querySelector(".projects-content");
const defaultProjectEl = document.querySelector(".projects-item");

function renderProjects() {
    projectList.get().forEach((project, index) => {
        const projectEl = defaultProjectEl.cloneNode(true);
        projectEl.querySelector("input").value = project.title;
        projectEl.setAttribute("data-index", index);
        projectsListEl.appendChild(projectEl);

        const btnRename = projectEl.querySelector(".btn-project-rename");
        btnRename.addEventListener("click", (e) => {
            const editListEl = e.target.parentElement
            editListEl.querySelector("input").classList.add("edit-project-name")
        });
    });
}

function hideProjects() {
    while (projectsListEl.firstChild) {
        projectsListEl.removeChild(projectsListEl.firstChild);
    }
}

export { hideProjects, renderProjects };
