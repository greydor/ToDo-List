// Singleton class storing the data for all projects and tasks

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
  const task2 = task("High priority task", "", "01/02/2024", "High", false);
  const task3 = task(
    'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    "01/02/2024",
    "Low",
    false
  );
  const task4 = task(
    "Buy low, sell high",
    "Get rich quick",
    "01/02/2024",
    "High",
    false
  );

  const task5 = task(
    "Buy fruit",
    "Apples, bananas, raspberries",
    "",
    "Low",
    true
  );
  const task6 = task("Buy soap", "", "", "High", false);
  const task7 = task("Buy bread", "", "", "Low", false);

  const exampleTasks = taskList();
  exampleTasks.add(task1);
  exampleTasks.add(task2);
  exampleTasks.add(task3);
  exampleTasks.add(task4);

  const exampleTasks2 = taskList();
  exampleTasks2.add(task5);
  exampleTasks2.add(task6);
  exampleTasks2.add(task7);

  const exampleTasks3 = taskList();
  exampleTasks3.add(task1);
  exampleTasks3.add(task2);
  exampleTasks3.add(task3);
  exampleTasks3.add(task4);
  exampleTasks3.add(task7);
  exampleTasks3.add(task5);
  exampleTasks3.add(task6);

  // List containing all projects
  const defaultProjects = [
    { title: "Default Project", tasks: exampleTasks },
    { title: "Shopping List", tasks: exampleTasks2 },
    { title: "Random Project", tasks: exampleTasks3 },
    { title: "Random Project2", tasks: exampleTasks3 },
    { title: "Random Project3", tasks: exampleTasks3 },
    { title: "Random Project4", tasks: exampleTasks3 },
    { title: "Random Project5", tasks: exampleTasks3 },
    { title: "Random Project6", tasks: exampleTasks3 },
    { title: "Random Project7", tasks: exampleTasks3 },
  ];
  let projects = defaultProjects;

  // Index of the currently selected project to display task for
  const activeIndex = 0;

  // Add new project at index = 0
  function add(projectTitle, tasks = false, addToEnd = false) {
    let newTasks = tasks;
    if (tasks === false) {
      newTasks = taskList();
    }
    const newProject = { title: projectTitle, tasks: newTasks };
    if (addToEnd === false) {
      projects.unshift(newProject);
    } else if (addToEnd === true) projects.push(newProject);
  }

  // Delete specified project
  function remove(index) {
    projects.splice(index, 1);
  }

  function get() {
    return projects;
  }

  function reset() {
    projects = [];
  }

  function resetToDefault() {
    projects = defaultProjects;
  }

  // Variable set to the index number of task being edited
  // Set to false if no project is being edited
  const taskEditIndex = false;

  return {
    get,
    add,
    remove,
    reset,
    resetToDefault,
    activeIndex,
    taskEditIndex,
  };
})();

function activeProject() {
  // Return active project object
  return projectList.get()[projectList.activeIndex];
}

function activeTask() {
  // Return task object being edited
  return activeProject().tasks.get()[projectList.taskEditIndex];
}

export default projectList;
export { activeProject, activeTask };
