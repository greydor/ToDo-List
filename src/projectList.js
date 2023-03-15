import taskList from "./taskList";
import task from "./task";

const projectList = (() => {
    const task1 = task("test", "44", "1-2-23", "High");
    const task2 = task("test2", "N/A", "2-6-23", "Low");

    const exampleTasks = taskList();
    exampleTasks.add(task1);
    exampleTasks.add(task2);

    const exampleTasks2 = taskList();
    exampleTasks.add(task1);
    exampleTasks.add(task2);

    const projects = [
        { title: "Default Project", tasks: exampleTasks },
        { title: "Default Project - copy", tasks: exampleTasks2 },
    ];

    const activeProjectIndex = 0

    function add(projectTitle) {
        projects.push(projectTitle);
    }

    function remove(index) {
        projects.splice(index, 1);
    }

    function get() {
        return projects;
    }

    function active() {
        return projects[activeProjectIndex]
    }

    // Variable temporarily set when editing task.
    // Changes task form submission.
    const taskEditIndex = false;

    return { get, add, remove, activeProjectIndex, taskEditIndex, active };
})();

export default projectList;
