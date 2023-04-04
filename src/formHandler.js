// Add functionality to form for creating and editing tasks

import { format } from "date-fns";
import task from "./task";
import { renderTaskList, hideTaskList } from "./renderTask";
import projectList, { activeProject } from "./projectList";
import resetProjectRender from "./resetProjectRender";
import { storeProjectList } from "./localDataStorage";

const formNewTask = document.querySelector(".form-add-task");
const overlay = document.querySelector(".overlay");
const btnAddTask = document.querySelector("#btn-add-task");
const btnCancel = document.querySelector("#btn-cancel-form");

const inputDescription = document.querySelector("#input-task-description");
const inputTitle = document.querySelector("#input-task-title");
const inputDueDate = document.querySelector("#input-due-date");
const inputPriority = document.querySelector("#input-priority");

function formHandler() {
    // Show form
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
    let dueDate;
    // Store selected date in a Date object, except if no date is selected
    try {
        dueDate = format(new Date(inputDueDate.value), "MM/dd/yyyy");
    } catch (rangeError) {
        dueDate = "";
    }

    // Add new task to project
    const newTask = task(
        inputTitle.value,
        inputDescription.value,
        dueDate,
        inputPriority.value,
        false
    );

    // Tasklist for active project
    const taskListEdit = activeProject().tasks;

    // If no project is selected for editing, add new task
    // Otherwise, replace existing task being edited with the updated data
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
    storeProjectList();
    event.preventDefault();
}

export default formHandler;
