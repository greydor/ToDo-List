// Define task class

function task(title, description, dueDate, priority, complete) {
    return Object.seal({
        title,
        description,
        dueDate, // Optional
        priority, // Value must be "Low" or "High"
        complete, // Value must be true or false
    });
}

export default task;
