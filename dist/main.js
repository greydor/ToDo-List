/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/formHandler.js":
/*!****************************!*\
  !*** ./src/formHandler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _renderTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTask */ \"./src/renderTask.js\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n\n\n\n\nconst formNewTask = document.querySelector(\".form-add-task\");\nconst overlay = document.querySelector(\".overlay\");\nconst btnAddTask = document.querySelector(\"#btn-add-task\");\nconst btnCancel = document.querySelector(\"#btn-cancel-form\");\n\nconst inputDescription = document.querySelector(\"#input-task-description\");\nconst inputTitle = document.querySelector(\"#input-task-title\");\nconst inputDueDate = document.querySelector(\"#input-due-date\");\nconst inputImportance = document.querySelector(\"#input-importance\");\n\nfunction formHandler() {\n    btnAddTask.addEventListener(\"click\", () => {\n        overlay.style.display = \"flex\";\n    });\n\n    btnCancel.addEventListener(\"click\", () => {\n        overlay.style.display = \"none\";\n        formNewTask.reset();\n    });\n\n    formNewTask.addEventListener(\"submit\", (event) => {\n        submitForm(\n            event,\n            _projectList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].activeProjectIndex,\n            _projectList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].taskEditIndex\n        );\n    });\n}\n\nfunction submitForm(event, projectIndex, taskIndex = false) {\n    const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n        inputTitle.value,\n        inputDescription.value,\n        inputDueDate.value,\n        inputImportance.value\n    );\n\n    const taskListEdit = _projectList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].active().tasks;\n    if (taskIndex === false) {\n        taskListEdit.add(newTask);\n    } else {\n        taskListEdit.replace(taskIndex, newTask);\n    }\n    overlay.style.display = \"none\";\n    formNewTask.reset();\n    (0,_renderTask__WEBPACK_IMPORTED_MODULE_1__.hideTaskList)();\n    (0,_renderTask__WEBPACK_IMPORTED_MODULE_1__.renderTaskList)();\n    _projectList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].taskEditIndex = false;\n    event.preventDefault();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formHandler);\n\n\n//# sourceURL=webpack://todo-list/./src/formHandler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formHandler */ \"./src/formHandler.js\");\n/* harmony import */ var _renderTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTask */ \"./src/renderTask.js\");\n/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderProjects */ \"./src/renderProjects.js\");\n\n\n\n\n(0,_renderTask__WEBPACK_IMPORTED_MODULE_1__.renderTaskList)();\n(0,_formHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_renderProjects__WEBPACK_IMPORTED_MODULE_2__.hideProjects)();\n(0,_renderProjects__WEBPACK_IMPORTED_MODULE_2__.renderProjects)()\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskList */ \"./src/taskList.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\nconst projectList = (() => {\n    const task1 = (0,_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"test\", \"44\", \"1-2-23\", \"High\");\n    const task2 = (0,_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"test2\", \"N/A\", \"2-6-23\", \"Low\");\n\n    const exampleTasks = (0,_taskList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    exampleTasks.add(task1);\n    exampleTasks.add(task2);\n\n    const exampleTasks2 = (0,_taskList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    exampleTasks.add(task1);\n    exampleTasks.add(task2);\n\n    const projects = [\n        { title: \"Default Project\", tasks: exampleTasks },\n        { title: \"Default Project - copy\", tasks: exampleTasks2 },\n    ];\n\n    const activeProjectIndex = 0\n\n    function add(projectTitle) {\n        projects.push(projectTitle);\n    }\n\n    function remove(index) {\n        projects.splice(index, 1);\n    }\n\n    function get() {\n        return projects;\n    }\n\n    function active() {\n        return projects[activeProjectIndex]\n    }\n\n    // Variable temporarily set when editing task.\n    // Changes task form submission.\n    const taskEditIndex = false;\n\n    return { get, add, remove, activeProjectIndex, taskEditIndex, active };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectList);\n\n\n//# sourceURL=webpack://todo-list/./src/projectList.js?");

/***/ }),

/***/ "./src/renderProjects.js":
/*!*******************************!*\
  !*** ./src/renderProjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hideProjects\": () => (/* binding */ hideProjects),\n/* harmony export */   \"renderProjects\": () => (/* binding */ renderProjects)\n/* harmony export */ });\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n\n\nconst projectsListEl = document.querySelector(\".projects-content\");\nconst defaultProjectEl = document.querySelector(\".projects-item\");\n\nfunction renderProjects() {\n    _projectList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get().forEach((project, index) => {\n        const projectEl = defaultProjectEl.cloneNode(true);\n        projectEl.querySelector(\"input\").value = project.title;\n        projectEl.setAttribute(\"data-index\", index);\n        projectsListEl.appendChild(projectEl);\n\n        const btnRename = projectEl.querySelector(\".btn-project-rename\");\n        btnRename.addEventListener(\"click\", (e) => {\n            const editListEl = e.target.parentElement\n            editListEl.querySelector(\"input\").classList.add(\"edit-project-name\")\n        });\n    });\n}\n\nfunction hideProjects() {\n    while (projectsListEl.firstChild) {\n        projectsListEl.removeChild(projectsListEl.firstChild);\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/renderProjects.js?");

/***/ }),

/***/ "./src/renderTask.js":
/*!***************************!*\
  !*** ./src/renderTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"hideTaskList\": () => (/* binding */ hideTaskList),\n/* harmony export */   \"renderTaskList\": () => (/* binding */ renderTaskList)\n/* harmony export */ });\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n\n\n\nconst activeList = _projectList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get()[_projectList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].activeProjectIndex].tasks;\n\nconst overlay = document.querySelector(\".overlay\");\nconst taskListEl = document.querySelector(\".task-list\");\n\nfunction render(currentTask, index) {\n    const taskEl = document.createElement(\"li\");\n    taskEl.classList.add(\"task\");\n\n    const taskContainerLeft = document.createElement(\"div\");\n    taskContainerLeft.classList.add(\"task-container-left\");\n\n    const taskTitle = document.createElement(\"div\");\n    taskTitle.textContent = currentTask.title;\n    const taskDesc = document.createElement(\"div\");\n    taskDesc.textContent = currentTask.description;\n    taskContainerLeft.appendChild(taskTitle);\n    taskContainerLeft.appendChild(taskDesc);\n\n    const taskDate = document.createElement(\"div\");\n    taskDate.textContent = currentTask.dueDate;\n\n    const taskImportance = document.createElement(\"div\");\n    taskImportance.textContent = currentTask.importance;\n\n    const btnDelete = document.createElement(\"btn\");\n    btnDelete.classList.add(\"btn-delete\");\n    btnDelete.textContent = \"Delete\";\n    btnDelete.setAttribute(\"type\", \"button\");\n    btnDelete.addEventListener(\"click\", () => {\n        deleteTask(index);\n    });\n\n    const btnEdit = document.createElement(\"btn\");\n    btnEdit.classList.add(\"btn-edit\");\n    btnEdit.textContent = \"Edit\";\n    btnEdit.setAttribute(\"type\", \"button\");\n    btnEdit.addEventListener(\"click\", () => {\n        _projectList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].taskEditIndex = index;\n        overlay.style.display = \"flex\";\n    });\n\n    taskEl.appendChild(taskContainerLeft);\n    taskEl.appendChild(taskDate);\n    taskEl.appendChild(taskImportance);\n    taskEl.appendChild(btnDelete);\n    taskEl.appendChild(btnEdit);\n\n    taskEl.setAttribute(\"data-index\", index);\n\n    taskListEl.appendChild(taskEl);\n}\n\nfunction renderTaskList() {\n    activeList.get().forEach((task, index) => {\n        render(task, index);\n    });\n}\n\nfunction hideTaskList() {\n    while (taskListEl.firstChild) {\n        taskListEl.removeChild(taskListEl.firstChild);\n    }\n}\n\nfunction deleteTask(index) {\n    activeList.remove(index);\n    hideTaskList();\n    renderTaskList();\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/renderTask.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction task(title, description, dueDate, importance) {\n    return Object.freeze({ title, description, dueDate, importance });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/taskList.js":
/*!*************************!*\
  !*** ./src/taskList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst taskList = (() => {\n    const list = [];\n\n    const get = () => list;\n\n    const add = (task) => {\n        list.push(task);\n    };\n\n    const remove = (index) => {\n        list.splice(index, 1);\n    };\n\n    // updatedTask is the task object replacing the task in specified index\n    const replace = (index, updatedTask) => {\n        list[index] = updatedTask;\n    };\n\n\n\n    return { get, add, remove, replace };\n});\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskList);\n\n//# sourceURL=webpack://todo-list/./src/taskList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;