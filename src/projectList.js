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

    const projects = [
        { title: "Default Project", tasks: exampleTasks },
        { title: "Default Project - copy", tasks: exampleTasks2 },
    ];

    const activeIndex = 0;

    function add(projectTitle) {
        const newProject = { title: projectTitle, tasks: taskList() };
        projects.unshift(newProject);
    }

    function remove(index) {
        projects.splice(index, 1);
    }

    function get() {
        return projects;
    }

    // Variable temporarily set when editing task.
    // Changes task form submission.
    const taskEditIndex = false;

    return { get, add, remove, activeIndex, taskEditIndex };
})();

function activeProject() {
    return projectList.get()[projectList.activeIndex];
}

function activeTask() {
    return activeProject().tasks.get()[projectList.taskEditIndex];
}

export default projectList;
export { activeProject, activeTask };
