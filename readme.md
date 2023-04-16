# To-do List

This is a website for creating, tracking, and organizing tasks. This website is created using javascript, HTML and CSS.

[Click Here](https://greydor.github.io/Todo-List/) for a link to the website.

[Click Here](https://github.com/greydor/Todo-List) for the source code

## Features

### Tasks

Each task must have a title and a priority. Optionally a date and description may be added.

To add a new project click on the plus button in the bottom right corner.

High priority tasks are noted with a red stripe to the left of the project name. There are two priority options: High and Low.

Tasks can be edited or deleted by clicking on the corresponding button next to each task.

The status of each task in terms of completion is indicated by the checkbox to the left of the task name. Completed tasks are greyed out.

### Projects

Tasks can be organized into different projects. To create a new project click on the plus button at the top of the projects section. Type a name for the new project and click on the checkmark.

The tasks for the currently selected project can be viewed in the right panel. To select a different project just click on the name.

Project names can be edited by clicking on the pencil icon next to the project name, or deleted by clicking on the trash icon.

### Browser Cookie Storage

All tasks and projects will be saved automatically using a cookie on the user's browser. If the device or browser used to access the site are changed, the data will not carry over. The data is saved in JSON format.

## Code Design

The javascript code was written in OOP style. The code is broken up into multiple ES6 modules for better organization and to avoid polluting the global namespace.

The final code is compiled into one javascript file using webpack. This was done mostly as a learning exercise. It is used to manage dependencies, bundle files, optimize the code.

## Future Improvements

- Add persistent data storage using a database and user sign-in with passwords.
- View to check tasks with upcoming due dates.
- Ability to rearrange task and project order.
- Add mobile browser compatibility.