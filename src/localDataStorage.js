import projectList from "./projectList";
import taskList from "./taskList";
import task from "./task";

function retrieveStoredProjectList() {
    // Parse stored JSON data and re-assign methods to objects
    let storedProjectList = localStorage.getItem("projectList");
    storedProjectList = JSON.parse(storedProjectList);

    // If no data is found, the default example projects will be used
    if (storedProjectList) {
        projectList.reset();

        // Generate project objects from stored data and add to projectList
        for (const project of storedProjectList) {
            const taskArray = project.tasks;

            // Generate a new empty taskList object
            const taskListTemplate = taskList();

            // Add tasks to new taskList
            for (const taskObject of taskArray) {
                // Generate an empty task object
                const taskTemplate = task(null, null, null, null, null);
                // Assign task methods and properties to stored task data.
                Object.assign(taskTemplate, taskObject);
                taskListTemplate.add(taskObject);
            }
            projectList.add(project.title, taskListTemplate, true);
        }
    }
}

function storeProjectList() {
    // Store Projects and tasks in JSON format to localStorage
    let list = projectList.get();
    list = list.map((project) => ({
        title: project.title,
        tasks: project.tasks.get(),
    }));
    const json = JSON.stringify(list);
    localStorage.setItem("projectList", json);
}

export { retrieveStoredProjectList, storeProjectList };
