import taskList from "./taskList";
import task from "./task";

const projectList = (() => {
    const task1 = task("test", "44", "1-2-23", "High");
    const task2 = task("test2", "N/A", "2-6-23", "Low");
    const task3 = task("test3", "879", "2-2-23", "Low");

    const exampleTasks = taskList();
    exampleTasks.add(task1);
    exampleTasks.add(task2);

    const exampleTasks2 = taskList();
    exampleTasks2.add(task3);
    exampleTasks2.add(task3);

    const projects = [
        { title: "Default Project", tasks: exampleTasks },
        { title: "Default Project - copy", tasks: exampleTasks2 },
    ];

    const activeIndex = 0;

    function add(projectTitle) {
        const newProject = {title: projectTitle, tasks: taskList() }
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
    return projectList.get()[projectList.activeIndex]
}

export default projectList;
export {activeProject};
