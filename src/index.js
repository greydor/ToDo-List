import formHandler from "./formHandler";
import { renderTaskList } from "./renderTask";
import {
    renderProjects,
    hideProjects,
    highlightActiveProject,
} from "./renderProjects";
import newProjectHandler from "./newProjectHandler";
import { retrieveStoredProjectList } from "./localDataStorage";

import "./css/reset.css";
import "./css/styles.css";

retrieveStoredProjectList();
renderTaskList();
formHandler();
hideProjects();
renderProjects();
newProjectHandler();
highlightActiveProject();
