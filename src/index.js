import formHandler from "./formHandler";
import "./footer";
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

// Restore stored task data or show default example projects if existing data not found 
retrieveStoredProjectList();
renderTaskList();

// Add event listeners
formHandler();
hideProjects();
renderProjects();
newProjectHandler();

// Apply css
highlightActiveProject();

