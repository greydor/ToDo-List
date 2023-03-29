import formHandler from "./formHandler";
import { renderTaskList } from "./renderTask";
import { renderProjects, hideProjects } from "./renderProjects";
import newProjectHandler from "./newProjectHandler"

renderTaskList();
formHandler();
hideProjects();
renderProjects();
newProjectHandler();
