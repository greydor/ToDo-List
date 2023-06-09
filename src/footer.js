import projectList from "./projectList";
import { renderTaskList, hideTaskList } from "./renderTask";
import { hideProjects, renderProjects, highlightActiveProject } from "./renderProjects"
import { storeProjectList } from "./localDataStorage";

const btnReset = document.querySelector(".btn-reset")
btnReset.addEventListener("click", () => {
  projectList.resetToDefault()
  hideProjects();
  renderProjects();
  projectList.activeIndex = 0;
  hideTaskList();
  renderTaskList();
  highlightActiveProject();
  storeProjectList();
})

