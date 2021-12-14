import DisplayNoteLibraryDOM from "./DisplayNoteLibraryDOM";
import Note from "./Note";
import SplitArray from "./SplitArray";
import SortProjectArrays from "./SortProjectArrays.js";
import { populateStorage } from "./CheckLocalStorage";
import { DeleteTodoButtonAddEventListeners, EditTodoButtonAddEventListeners } from "./AddEventListeners.js";

function CreateNewTodo(inputTitle) {
    const libraryData = window.noteLibraryData;
    console.log("CreateNewTodo Function Called.");
    console.log(libraryData);
    const todoTitle = inputTitle;
    // console.log("Title Should Be Here " + todoTitle);
    //Add Variables to label Note Input
    // console.log(args.length);

    const newTodo = Note(todoTitle, false, false, false, false, false, false, false);
    // console.log(newTodo);

    libraryData.push(newTodo);

    //Set Master Library
    window.noteLibraryData = libraryData;

    populateStorage(libraryData);
    

    console.log(libraryData);

    // Sort Array after push
    const sortedNoteLibraryData = SortProjectArrays(libraryData);

    const projectTodoArray = SplitArray(sortedNoteLibraryData, 0);
    // console.log(projectTodoArray);
    DisplayNoteLibraryDOM(projectTodoArray);
    // Add functionality to Delete button on todo cards
    DeleteTodoButtonAddEventListeners();
    // Add functionality to Edit buttons on todo cards
    EditTodoButtonAddEventListeners(projectTodoArray);

}

export default CreateNewTodo;