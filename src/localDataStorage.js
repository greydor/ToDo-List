import projectList from "./projectList";
import taskList from "./taskList";
import task from "./task";

function retrieveStoredProjectList() {
    let storedProjectList = localStorage.getItem("projectList");
    storedProjectList = JSON.parse(storedProjectList);

    if (storedProjectList) {
        projectList.reset();
        for (const project of storedProjectList) {
            const taskArray = project.tasks;
            const taskListTemplate = taskList();
            for (const taskObject of taskArray) {
                const taskTemplate = task(null, null, null, null, null);
                Object.assign(taskTemplate, taskObject);
                taskListTemplate.add(taskObject);
            }
            projectList.add(project.title, taskListTemplate, true);
        }
    }
}

function storeProjectList() {
    let list = projectList.get();
    list = list.map((project) => ({
        title: project.title,
        tasks: project.tasks.get(),
    }));
    const json = JSON.stringify(list);
    localStorage.setItem("projectList", json);
}

export { retrieveStoredProjectList, storeProjectList };
