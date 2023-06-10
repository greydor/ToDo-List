// Render all tasks from currently selected project
// Define event listeners for task elements

import { format } from "date-fns";
import projectList, { activeProject, activeTask } from "./projectList";
import resetProjectRender from "./resetProjectRender";
import { storeProjectList } from "./localDataStorage";

const overlay = document.querySelector(".overlay");
const taskListEl = document.querySelector(".task-list");
const inputDescription = document.querySelector("#input-task-description");
const inputTitle = document.querySelector("#input-task-title");
const inputDueDate = document.querySelector("#input-due-date");
const inputPriority = document.querySelector("#input-priority");

function render(task, index) {
  const currentTask = task;
  const taskEl = document.createElement("li");
  taskEl.classList.add("task");

  const taskCheckbox = document.createElement("input");
  taskCheckbox.setAttribute("type", "checkbox");
  taskCheckbox.setAttribute("aria-label", "mark task complete");
  taskCheckbox.classList.add("task-checkbox");
  if (currentTask.complete === true) {
    taskCheckbox.setAttribute("checked", "");
    taskEl.classList.add("complete");
  }

  // Toggle task completion status
  taskCheckbox.addEventListener("click", () => {
    if (currentTask.complete === true) {
      taskEl.classList.remove("complete");
    } else {
      taskEl.classList.add("complete");
    }
    currentTask.complete = !currentTask.complete;
    storeProjectList();
  });

  // Flag project if priority is set to high
  const taskPriority = document.createElement("div");
  taskPriority.classList.add("task-priority");
  if (currentTask.priority === "High") {
    taskPriority.classList.add("priority-high");
  }

  const taskTitle = document.createElement("div");
  taskTitle.classList.add("task-title");
  taskTitle.textContent = currentTask.title;

  const taskDesc = document.createElement("div");
  taskDesc.classList.add("task-desc");
  taskDesc.textContent = currentTask.description;

  // Create container with task title and description
  const taskContainerName = document.createElement("div");
  taskContainerName.classList.add("task-container-name");
  taskContainerName.appendChild(taskTitle);
  taskContainerName.appendChild(taskDesc);

  const taskDate = document.createElement("div");
  taskDate.classList.add("task-date");
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

  // Display task edit form
  btnEdit.addEventListener("click", () => {
    // Record the index of task being edited
    projectList.taskEditIndex = index;
    // Change display from none to flex
    overlay.style.display = "flex";
    resetProjectRender();

    // Populate form based on existing task data
    inputTitle.value = activeTask().title;
    inputDescription.value = activeTask().description;
    try {
      inputDueDate.value = format(new Date(activeTask().dueDate), "yyyy-MM-dd");
      // Due date is optional, skip if date is not set
    } catch (RangeError) {
      // Pass
    }
    inputPriority.value = activeTask().priority;
  });

  btnEditDiv.appendChild(btnEdit);

  // Create task delete button
  const btnDelete = document.createElement("btn");
  btnDelete.classList.add("btn-delete");
  btnDelete.textContent = "Delete";
  btnDelete.setAttribute("type", "button");
  btnDelete.addEventListener("click", () => {
    deleteTask(index);
    resetProjectRender();
  });
  btnDelDiv.appendChild(btnDelete);

  const taskContainerRight = document.createElement("div");
  taskContainerRight.classList.add("flex-container");
  taskContainerRight.classList.add("task-container-right");
  taskContainerRight.appendChild(taskDate);
  taskContainerRight.appendChild(btnEditDiv);
  taskContainerRight.appendChild(btnDelDiv);

  const taskContainerLeft = document.createElement("div");
  taskContainerLeft.classList.add("flex-container");
  taskContainerLeft.classList.add("task-container-left");
  taskContainerLeft.appendChild(taskCheckbox);
  taskContainerLeft.appendChild(taskContainerName);

  const taskInfoContainer = document.createElement("div");
  taskInfoContainer.classList.add("flex-container");
  taskInfoContainer.classList.add("task-info-container");

  taskInfoContainer.appendChild(taskContainerLeft);
  taskInfoContainer.appendChild(taskContainerRight);

  taskEl.appendChild(taskPriority);
  taskEl.appendChild(taskInfoContainer);

  // data-index matches the index of the task in taskList object
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
  // Delete task and re-render list
  activeProject().tasks.remove(index);
  hideTaskList();
  renderTaskList();
  storeProjectList();
}

export { renderTaskList, hideTaskList, deleteTask };
