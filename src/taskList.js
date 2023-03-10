

const taskList = (() => {
    const list = [];

    const get = () => list;

    const add = (task) => {
        list.push(task);
    };

    const remove = (index) => {
        list.splice(index, 1);
    };

    // taskEdit is the task object replacing the task in specified index
    const replace = (index, taskEdit) => {
        list[index] = taskEdit;
    };



    return { get, add, remove, replace };
});





export default taskList;