import DisplayNoteLibraryDOM from "./DisplayNoteLibraryDOM";
import Note from "./Note";
import SplitArray from "./SplitArray";
import SortNoteArrays from "./SortNoteArrays.js";

function CreateNewTodo(...args) {
    const libraryData = args[0];
    console.log("CreateNewTodo Function Called.");
    // console.log(libraryData);
    const todoTitle = args[1];
    // console.log("Title Should Be Here " + todoTitle);
    //Add Variables to label Note Input
    // console.log(args.length);
    if (args.length < 3) {
        const newTodo = Note(todoTitle, false, false, false, false, false, false, false);
        // console.log(newTodo);

        libraryData.push(newTodo);

        // console.log(libraryData);

        // Sort Array after push
        const sortedNoteLibraryData = SortNoteArrays(libraryData);

        const projectTodoArray = SplitArray(sortedNoteLibraryData, 0);
        // console.log(projectTodoArray);
        DisplayNoteLibraryDOM(projectTodoArray);
    }
}

export default CreateNewTodo;