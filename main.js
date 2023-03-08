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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskList */ \"./src/taskList.js\");\n/* harmony import */ var _renderTaskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTaskList */ \"./src/renderTaskList.js\");\n\n\n\n\nfunction formHandler() {\n    const formNewTask = document.querySelector(\".form-add-task\");\n    const overlay = document.querySelector(\".overlay\");\n    const btnAddTask = document.querySelector(\"#btn-add-task\");\n    const btnCancel = document.querySelector(\"#btn-cancel-form\");\n\n    const inputDescription = document.querySelector(\"#input-task-description\");\n    const inputTitle = document.querySelector(\"#input-task-title\");\n    const inputDueDate = document.querySelector(\"#input-due-date\");\n    const inputImportance = document.querySelector(\"#input-importance\");\n\n    btnAddTask.addEventListener(\"click\", () => {\n        overlay.style.display = \"flex\";\n    });\n\n    btnCancel.addEventListener(\"click\", () => {\n        overlay.style.display = \"none\";\n        formNewTask.reset();\n    });\n\n    formNewTask.addEventListener(\"submit\", (e) => {\n        const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n            inputTitle.value,\n            inputDescription.value,\n            inputDueDate.value,\n            inputImportance.value\n        );\n        _taskList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].add(newTask);\n        e.preventDefault();\n        overlay.style.display = \"none\";\n        console.log(_taskList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get());\n        formNewTask.reset();\n        (0,_renderTaskList__WEBPACK_IMPORTED_MODULE_2__.hideTaskList)();\n        (0,_renderTaskList__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formHandler);\n\n\n//# sourceURL=webpack://todo-list/./src/formHandler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formHandler */ \"./src/formHandler.js\");\n/* harmony import */ var _renderTaskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTaskList */ \"./src/renderTaskList.js\");\n\n\n\n(0,_renderTaskList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_formHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/renderTaskList.js":
/*!*******************************!*\
  !*** ./src/renderTaskList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"hideTaskList\": () => (/* binding */ hideTaskList)\n/* harmony export */ });\n/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskList */ \"./src/taskList.js\");\n\n\nconst taskListEl = document.querySelector(\".task-list\");\n\nfunction render(task, index) {\n    const taskEl = document.createElement(\"li\");\n    taskEl.classList.add(\"task\");\n\n    const taskContainerLeft = document.createElement(\"div\");\n    taskContainerLeft.classList.add(\"task-container-left\");\n\n    const taskTitle = document.createElement(\"div\");\n    taskTitle.textContent = task.title;\n    const taskDesc = document.createElement(\"div\");\n    taskDesc.textContent = task.description;\n    taskContainerLeft.appendChild(taskTitle);\n    taskContainerLeft.appendChild(taskDesc);\n\n    const taskDate = document.createElement(\"div\");\n    taskDate.textContent = task.dueDate;\n\n    const taskImportance = document.createElement(\"div\");\n    taskImportance.textContent = task.importance;\n\n    const btnDelete = document.createElement(\"btn\")\n    btnDelete.classList.add(\"btn-delete\")\n    btnDelete.textContent = \"Delete\"\n    btnDelete.setAttribute(\"type\", \"button\")\n    btnDelete.addEventListener(\"click\", (e) => {\n        deleteTask(index)\n    })\n\n    const btnEdit = document.createElement(\"btn\")\n    btnEdit.classList.add(\"btn-edit\")\n    btnEdit.textContent = \"Edit\"\n    btnEdit.setAttribute(\"type\", \"button\")\n\n    taskEl.appendChild(taskContainerLeft);\n    taskEl.appendChild(taskDate);\n    taskEl.appendChild(taskImportance);\n    taskEl.appendChild(btnDelete);\n    taskEl.appendChild(btnEdit);\n\n    taskEl.setAttribute(\"data-index\", index)\n\n    taskListEl.appendChild(taskEl);\n}\n\nfunction renderTaskList() {\n    _taskList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get().forEach((task, index) => {\n        render(task, index);\n    });\n}\n\nfunction hideTaskList() {\n    while (taskListEl.firstChild) {\n        taskListEl.removeChild(taskListEl.firstChild);\n    }\n}\n\nfunction deleteTask(index) {\n    _taskList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove(index)\n    hideTaskList()\n    renderTaskList()\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTaskList);\n\n\n\n//# sourceURL=webpack://todo-list/./src/renderTaskList.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction task(title, description, dueDate, importance) {\n\n    return Object.freeze({title, description, dueDate, importance})\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/taskList.js":
/*!*************************!*\
  !*** ./src/taskList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst taskList = (() => {\n    const list = [\n        {title: 'test', description: '44', dueDate: '1-2-23', importance: 'High'},\n        {title: 'test2', description: '55', dueDate: '1-2-23', importance: 'Low'}\n    ];\n\n    const get = () => list;\n\n    const add = (task) => {\n        list.push(task);\n    };\n\n    const remove = (index) => {\n        list.splice(index, 1);\n    };\n\n    return { get, add, remove };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskList);\n\n\n//# sourceURL=webpack://todo-list/./src/taskList.js?");

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