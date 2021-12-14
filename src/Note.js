import GenerateUniqueID from "./GenerateUniqueID.js";

function Note(title, description, list, dateCreated, dueDate, priority, project, masterIndex) {
    //testing 
    const todaysDate = Date().split(' ', 5).join(' ');
    // console.log("NOTE Function HAS BEEN CALLED/LOADED.")
    title = title;
    description = description || "Description goes here...";
    list = list;
    dateCreated = dateCreated || todaysDate;
    dueDate = dueDate || addDays(todaysDate, 1);
    priority = priority || "LOW";
    project = project || "Default";
    masterIndex = masterIndex || GenerateUniqueID();


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

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export default Note;