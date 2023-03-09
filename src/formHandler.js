import task from "./task";
import taskList, { renderTaskList, hideTaskList } from "./taskList";

const formNewTask = document.querySelector(".form-add-task");
const overlay = document.querySelector(".overlay");
const btnAddTask = document.querySelector("#btn-add-task");
const btnCancel = document.querySelector("#btn-cancel-form");

const inputDescription = document.querySelector("#input-task-description");
const inputTitle = document.querySelector("#input-task-title");
const inputDueDate = document.querySelector("#input-due-date");
const inputImportance = document.querySelector("#input-importance");

function formHandler() {
    btnAddTask.addEventListener("click", () => {
        overlay.style.display = "flex";
    });

    btnCancel.addEventListener("click", () => {
        overlay.style.display = "none";
        formNewTask.reset();
    });

    formNewTask.addEventListener("submit", (event) => {
        submitForm(event, taskList.indexToEdit);
    });
}

function submitForm(event, index = false) {
    const newTask = task(
        inputTitle.value,
        inputDescription.value,
        inputDueDate.value,
        inputImportance.value
    );

    if (index === false) {
        taskList.add(newTask);
    } else {
        taskList.replace(index, newTask);
    }
    overlay.style.display = "none";
    formNewTask.reset();
    hideTaskList();
    renderTaskList();
    taskList.indexToEdit = false;
    event.preventDefault();
}

export default formHandler;
