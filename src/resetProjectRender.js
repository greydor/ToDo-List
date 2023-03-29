import projectList from "./projectList";

function resetProjectRender() {
    const btnRenameList = document.querySelectorAll(".btn-project-rename");
    btnRenameList.forEach((btn) => {
        btn.style.display = "inline";
    });

    const btnRenameAcceptList = document.querySelectorAll(
        ".btn-project-rename-accept"
    );
    btnRenameAcceptList.forEach((btn) => {
        btn.style.display = "none";
    });

    const projectsToReset = document.querySelectorAll(".edit-project-name");
    projectsToReset.forEach((project) => {
        project.classList.remove("edit-project-name");
        project.classList.add("btn-project-rename");
        const index = project.parentNode.getAttribute("data-index");
        project.value = projectList.get()[index].title;
    });

    const newProject = document.querySelector(".new-project-temp");
    if (newProject) {
        newProject.parentNode.remove();
    }
}

export default resetProjectRender;
