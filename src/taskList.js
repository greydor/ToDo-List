const taskList = (() => {
    const list = [
        {title: 'test', description: '44', dueDate: '1-2-23', importance: 'High'},
        {title: 'test2', description: '55', dueDate: '1-2-23', importance: 'Low'}
    ];

    const get = () => list;

    const add = (task) => {
        list.push(task);
    };

    const remove = (index) => {
        list.splice(index, 1);
    };

    return { get, add, remove };
})();

export default taskList;
