function Note(title, description, list, dueDate, priority) {
    //testing 
    console.log("NOTE HAS BEEN CALLED/LOADED.")
    title = title;
    description = description;
    list = list;
    const dateCreated = Date().split(' ', 5).join(' ');
    dueDate = dueDate;
    priority = priority;

    return {
        title,
        description,
        list,
        dateCreated,
        dueDate,
        priority,
    };
};

export default Note;