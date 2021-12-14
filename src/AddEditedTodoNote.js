import { populateStorage } from "./CheckLocalStorage";
import DisplayNoteLibraryDOM from "./DisplayNoteLibraryDOM";
import SortProjectArrays from "./SortProjectArrays";
import SplitArray from "./SplitArray";

function AddEditedTodoNote(currentLibraryData, index) {
    console.log("AddEditedTodoNote function called...")
    // console.log(currentLibraryData);
    const projectIndex = document.querySelector('.h2Title').getAttribute('data-index');
    console.log(projectIndex);

    const inputTitle = document.getElementById('inputTodoTitle').value;
    const inputDescription = document.getElementById('inputTodoDescription').value;
    const inputListArray = document.querySelectorAll('.inputTodoListItem');
    const inputDueDate = document.getElementById('inputTodoDueDate').value;
    const inputPriority = document.getElementById('inputTodoPriority').value;
    const inputProject = document.getElementById('inputTodoProject').value;


    if (inputTitle.length > 0) {
        if (inputTitle !== currentLibraryData[index].title) {
            currentLibraryData[index].title = inputTitle;
        }
    }
    
    if (inputDescription.length > 0) {
        if (inputDescription !== currentLibraryData[index].description) {
            // console.log("Firing Now!! Filling Description");
            currentLibraryData[index].description = inputDescription;
        }
    }

    // THIS WILL HAVE TO BE CHANGED!
    // if (inputListArray.length > 0) {
    //     if (inputListArray !== currentLibraryData[index].list) {
    //         // console.log("Firing Now!!");
    //         currentLibraryData[index].list = inputListArray;
    //     }
    // }

    if (inputDueDate.length > 0) {
        if (inputDueDate !== currentLibraryData[index].dueDate) {
            currentLibraryData[index].dueDate = inputDueDate;
        }
    }

    if (inputPriority.length > 0) {
        if (inputPriority !== currentLibraryData[index].priority) {
            currentLibraryData[index].priority = inputPriority;
        }
    }

    if (inputProject.length > 0) {
        if (inputProject !== currentLibraryData[index].project) {
            currentLibraryData[index].project = inputProject;
        }
    }

    console.log(currentLibraryData[index]);
    console.log(currentLibraryData);

    //ADD NEW NOTE TO MASTER LIBRARY (This is already happening on Edit... Not sure why xD)
    
    const sortedCurrentLibraryData = SortProjectArrays(currentLibraryData);
    const projectTodoArray = SplitArray(sortedCurrentLibraryData, 0);
    console.log(projectTodoArray);


    // Display current project again THIS IS INFINITELOOP
    DisplayNoteLibraryDOM(projectTodoArray, projectIndex);
    populateStorage(window.noteLibraryData);
}

export default AddEditedTodoNote;