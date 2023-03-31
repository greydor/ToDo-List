import projectList, { activeProject } from "./projectList";
import resetProjectRender from "./resetProjectRender";

const overlay = document.querySelector(".overlay");
const taskListEl = document.querySelector(".task-list");

function render(currentTask, index) {
    const taskEl = document.createElement("li");
    taskEl.classList.add("task");

    const taskContainerLeft = document.createElement("div");
    taskContainerLeft.classList.add("task-container-left");

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title")
    taskTitle.textContent = currentTask.title;
    const taskDesc = document.createElement("div");
    taskDesc.classList.add("task-desc");
    taskDesc.textContent = currentTask.description;
    taskContainerLeft.appendChild(taskTitle);
    taskContainerLeft.appendChild(taskDesc);

    const taskDate = document.createElement("div");
    taskDate.classList.add("task-date")
    taskDate.textContent = currentTask.dueDate;

    const btnEditDiv = document.createElement("div");
    btnEditDiv.classList.add("flex-container");
    const btnDelDiv = btnEditDiv.cloneNode();
    btnEditDiv.classList.add("btn-edit-container");
    btnDelDiv.classList.add("btn-del-container");

    const btnEdit = document.createElement("btn");
    btnEdit.classList.add("btn-edit");

    btnEdit.textContent = "Edit";
    btnEdit.setAttribute("type", "button");
    btnEdit.addEventListener("click", () => {
        projectList.taskEditIndex = index;
        overlay.style.display = "flex";
        resetProjectRender();
    });
    btnEditDiv.appendChild(btnEdit);

    const btnDelete = document.createElement("btn");
    btnDelete.classList.add("btn-delete");
    btnDelete.textContent = "Delete";
    btnDelete.setAttribute("type", "button");
    btnDelete.addEventListener("click", () => {
        deleteTask(index);
        resetProjectRender();
    });
    btnDelDiv.appendChild(btnDelete);

    taskEl.appendChild(taskContainerLeft);
    taskEl.appendChild(taskDate);
    taskEl.appendChild(btnEditDiv);
    taskEl.appendChild(btnDelDiv);

    taskEl.setAttribute("data-index", index);

    taskListEl.appendChild(taskEl);
}

function renderTaskList() {
    activeProject()
        .tasks.get()
        .forEach((task, index) => {
            render(task, index);
        });
}

function hideTaskList() {
    while (taskListEl.firstChild) {
        taskListEl.removeChild(taskListEl.firstChild);
    }
}

function deleteTask(index) {
    activeProject().tasks.remove(index);
    hideTaskList();
    renderTaskList();
}

export { renderTaskList, hideTaskList, deleteTask };
