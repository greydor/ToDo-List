const overlay = document.querySelector(".overlay");
const taskListEl = document.querySelector(".task-list");

const taskList = (() => {
    const list = [
        {
            title: "test",
            description: "44",
            dueDate: "1-2-23",
            importance: "High",
        },
        {
            title: "test2",
            description: "55",
            dueDate: "1-2-23",
            importance: "Low",
        },
    ];

    const get = () => list;

    const add = (task) => {
        list.push(task);
    };

    const remove = (index) => {
        list.splice(index, 1);
    };

    // taskEdit is the task object replacing the task in specified index
    const replace = (index, taskEdit) => {
        list[index] = taskEdit;
    };

    // Variable temporarily set when editing task.
    // Changes task form submission.
    const indexToEdit = false;

    return { get, add, remove, replace, indexToEdit };
})();

function render(task, index) {
    const taskEl = document.createElement("li");
    taskEl.classList.add("task");

    const taskContainerLeft = document.createElement("div");
    taskContainerLeft.classList.add("task-container-left");

    const taskTitle = document.createElement("div");
    taskTitle.textContent = task.title;
    const taskDesc = document.createElement("div");
    taskDesc.textContent = task.description;
    taskContainerLeft.appendChild(taskTitle);
    taskContainerLeft.appendChild(taskDesc);

    const taskDate = document.createElement("div");
    taskDate.textContent = task.dueDate;

    const taskImportance = document.createElement("div");
    taskImportance.textContent = task.importance;

    const btnDelete = document.createElement("btn");
    btnDelete.classList.add("btn-delete");
    btnDelete.textContent = "Delete";
    btnDelete.setAttribute("type", "button");
    btnDelete.addEventListener("click", () => {
        deleteTask(index);
    });

    const btnEdit = document.createElement("btn");
    btnEdit.classList.add("btn-edit");
    btnEdit.textContent = "Edit";
    btnEdit.setAttribute("type", "button");
    btnEdit.addEventListener("click", () => {
        taskList.indexToEdit = index;
        overlay.style.display = "flex";
    });

    taskEl.appendChild(taskContainerLeft);
    taskEl.appendChild(taskDate);
    taskEl.appendChild(taskImportance);
    taskEl.appendChild(btnDelete);
    taskEl.appendChild(btnEdit);

    taskEl.setAttribute("data-index", index);

    taskListEl.appendChild(taskEl);
}

function renderTaskList() {
    taskList.get().forEach((task, index) => {
        render(task, index);
    });
}

function hideTaskList() {
    while (taskListEl.firstChild) {
        taskListEl.removeChild(taskListEl.firstChild);
    }
}

function deleteTask(index) {
    taskList.remove(index);
    hideTaskList();
    renderTaskList();
}

export default taskList;
export { renderTaskList, hideTaskList };
