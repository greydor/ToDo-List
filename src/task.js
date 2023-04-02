function task(title, description, dueDate, importance) {
    const complete = false;
    return Object.freeze({ title, description, dueDate, importance, complete });
}

export default task;
