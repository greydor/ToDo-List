// Singleton class storing the data for all projects and tasks

import taskList from "./taskList";
import task from "./task";

const projectList = (() => {
    const task1 = task(
        "Example task",
        "Enter description here",
        "01/01/2024",
        "Low",
        false
    );
    const task2 = task(
        "High priority task",
        "N/A",
        "01/02/2024",
        "High",
        false
    );

    const task6 = task("test6", "879", "01/02/2023", "Low", true);

    const exampleTasks = taskList();
    exampleTasks.add(task1);
    exampleTasks.add(task2);

    const exampleTasks2 = taskList();
    exampleTasks2.add(task6);

    // List containing all projects
    let projects = [
        { title: "Default Project", tasks: exampleTasks },
        { title: "Default Project - copy", tasks: exampleTasks2 },
    ];

    // Index of the currently selected project to display task for
    const activeIndex = 0;

    // Add new project at index = 0
    function add(projectTitle, tasks = false, addToEnd = false) {
        let newTasks = tasks;
        if (tasks === false) {
            newTasks = taskList();
        }
        const newProject = { title: projectTitle, tasks: newTasks };
        if (addToEnd === false) {
            projects.unshift(newProject);
        } else if (addToEnd === true) projects.push(newProject);
    }

    // Delete specified project
    function remove(index) {
        projects.splice(index, 1);
    }

    function get() {
        return projects;
    }

    function reset() {
        projects = [];
    }

    // Variable set to the index number of task being edited
    // Set to false if no project is being edited
    const taskEditIndex = false;

    return { get, add, remove, reset, activeIndex, taskEditIndex };
})();

function activeProject() {
    // Return active project object
    return projectList.get()[projectList.activeIndex];
}

function activeTask() {
    // Return task object being edited
    return activeProject().tasks.get()[projectList.taskEditIndex];
}

export default projectList;
export { activeProject, activeTask };
