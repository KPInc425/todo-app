import DisplayNoteLibraryDOM from "./DisplayNoteLibraryDOM";

function AddEditedTodoNote(libraryData, index) {
    console.log("AddEditedTodoNote function called...")
    // console.log(libraryData);

    const inputTitle = document.getElementById('inputTodoTitle').value;
    const inputDescription = document.getElementById('inputTodoDescription').value;
    const inputListArray = document.querySelectorAll('.inputTodoListItem');
    const inputDueDate = document.getElementById('inputTodoDueDate').value;
    const inputPriority = document.getElementById('inputTodoPriority').value;
    const inputProject = document.getElementById('inputTodoProject').value;


    if (inputTitle.length > 0) {
        if (inputTitle !== libraryData[index].title) {
            libraryData[index].title = inputTitle;
        }
    }
    
    if (inputDescription.length > 0) {
        if (inputDescription !== libraryData[index].description) {
            // console.log("Firing Now!! Filling Description");
            libraryData[index].description = inputDescription;
        }
    }

    // THIS WILL HAVE TO BE CHANGED!
    // if (inputListArray.length > 0) {
    //     if (inputListArray !== libraryData[index].list) {
    //         // console.log("Firing Now!!");
    //         libraryData[index].list = inputListArray;
    //     }
    // }

    if (inputDueDate.length > 0) {
        if (inputDueDate !== libraryData[index].dueDate) {
            libraryData[index].dueDate = inputDueDate;
        }
    }

    if (inputPriority.length > 0) {
        if (inputPriority !== libraryData[index].priority) {
            libraryData[index].priority = inputPriority;
        }
    }

    if (inputProject.length > 0) {
        if (inputProject !== libraryData[index].project) {
            libraryData[index].project = inputProject;
        }
    }


    // Display current project again THIS IS INFINITELOOP
    // DisplayNoteLibraryDOM(libraryData);
}

export default AddEditedTodoNote;