import task from "./task";
import taskList from "./taskList";
import renderTaskList, {hideTaskList} from "./renderTaskList"

function formHandler() {
    const formNewTask = document.querySelector(".form-add-task");
    const overlay = document.querySelector(".overlay");
    const btnAddTask = document.querySelector("#btn-add-task");
    const btnCancel = document.querySelector("#btn-cancel-form");

    const inputDescription = document.querySelector("#input-task-description");
    const inputTitle = document.querySelector("#input-task-title");
    const inputDueDate = document.querySelector("#input-due-date");
    const inputImportance = document.querySelector("#input-importance");

    btnAddTask.addEventListener("click", () => {
        overlay.style.display = "flex";
    });

    btnCancel.addEventListener("click", () => {
        overlay.style.display = "none";
        formNewTask.reset();
    });

    formNewTask.addEventListener("submit", (e) => {
        const newTask = task(
            inputTitle.value,
            inputDescription.value,
            inputDueDate.value,
            inputImportance.value
        );
        taskList.add(newTask);
        e.preventDefault();
        overlay.style.display = "none";
        console.log(taskList.get());
        formNewTask.reset();
        hideTaskList();
        renderTaskList();
    });
}

export default formHandler;
