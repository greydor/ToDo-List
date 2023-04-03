import taskList from "./taskList";
import task from "./task";

const projectList = (() => {
    const task1 = task("test", "44", "01/02/2023", "High", false);
    const task2 = task("test2", "N/A", "01/02/2023", "Low", false);
    const task3 = task("test3 66666666666 testinggggggggg ffffff reeed", "879", "01/02/2023", "Low", true);
    const task4 = task("test4", "ggggggggg ggggggg g gggg g ggg gggggggggggg ggggggg gggggggggg gggg g", "01/02/2023", "High", true);
    const task5 = task("test5", "N/A", "01/02/2023", "Low", true);
    const task6 = task("test6", "879", "01/02/2023", "Low", true);

    const exampleTasks = taskList();
    exampleTasks.add(task1);
    exampleTasks.add(task2);
    exampleTasks.add(task3);
    exampleTasks.add(task4);
    exampleTasks.add(task5);


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
