import GenerateUniqueID from "./GenerateUniqueID.js";

function Note(title, description, list, dueDate, priority, project) {
    //testing 
    console.log("NOTE HAS BEEN CALLED/LOADED.")
    title = title;
    description = description;
    list = list;
    const dateCreated = Date().split(' ', 5).join(' ');
    dueDate = dueDate;
    priority = priority;
    project = project;
    const masterIndex = GenerateUniqueID();


    return {
        title,
        description,
        list,
        dateCreated,
        dueDate,
        priority,
        project,
        masterIndex,
    };
};

export default Note;