function task(title, description, dueDate, priority, complete) {
    return Object.seal({ title, description, dueDate, priority, complete });
}

export default task;
