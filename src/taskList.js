// taskList class contains a list of task elements
const taskList = () => {
    const list = [];

    const get = () => list;

    const add = (task) => {
        list.push(task);
    };

    const remove = (index) => {
        list.splice(index, 1);
    };

    // updatedTask is the task object replacing the task in specified index
    const replace = (index, updatedTask) => {
        list[index] = updatedTask;
    };

    return { get, add, remove, replace };
};

export default taskList;
