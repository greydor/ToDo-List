import { format } from 'date-fns'
import task from "./task";
import { renderTaskList, hideTaskList } from "./renderTask";
import projectList, { activeProject } from "./projectList";
import resetProjectRender from "./resetProjectRender";


const formNewTask = document.querySelector(".form-add-task");
const overlay = document.querySelector(".overlay");
const btnAddTask = document.querySelector("#btn-add-task");
const btnCancel = document.querySelector("#btn-cancel-form");

const inputDescription = document.querySelector("#input-task-description");
const inputTitle = document.querySelector("#input-task-title");
const inputDueDate = document.querySelector("#input-due-date");
const inputPriority = document.querySelector("#input-priority");

function formHandler() {
    btnAddTask.addEventListener("click", () => {
        resetProjectRender();
        overlay.style.display = "flex";

    });

    btnCancel.addEventListener("click", () => {
        overlay.style.display = "none";
        formNewTask.reset();
    });

    formNewTask.addEventListener("submit", (event) => {
        submitForm(event, projectList.taskEditIndex);
    });
}

function submitForm(event, taskIndex = false) {
    let dueDate
    try {
    dueDate = format(new Date(inputDueDate.value), 'MM/dd/yyyy')        
    } catch (rangeError) {
    dueDate = "N/A"
    }

    const newTask = task(
        inputTitle.value,
        inputDescription.value,
        dueDate,
        inputPriority.value,
        false,
    );

    const taskListEdit = activeProject().tasks;
    if (taskIndex === false) {
        taskListEdit.add(newTask);
    } else {
        taskListEdit.replace(taskIndex, newTask);
    }
    overlay.style.display = "none";
    formNewTask.reset();
    hideTaskList();
    renderTaskList();
    projectList.taskEditIndex = false;
    event.preventDefault();
}

export default formHandler;
