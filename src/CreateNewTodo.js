import DisplayNoteLibraryDOM from "./DisplayNoteLibraryDOM";
import Note from "./Note";
import SplitArray from "./SplitArray";
import SortProjectArrays from "./SortProjectArrays.js"

function CreateNewTodo(...args) {
    const libraryData = args[0];
    console.log(libraryData);
    const todoTitle = args[1];
    console.log("Title Should Be Here " + todoTitle);
    //Add Variables to label Note Input
    console.log(args.length);
    if (args.length < 3) {
        const newTodo = Note(todoTitle, "", "", "", "", "Default");
        console.log(newTodo);

        libraryData.push(newTodo);

        console.log(libraryData);

        // Sort Array after push
        const sortedNoteLibraryData = SortProjectArrays(libraryData);

        const projectTodoArray = SplitArray(sortedNoteLibraryData, 0);
        console.log(projectTodoArray);
        DisplayNoteLibraryDOM(projectTodoArray);
    }
}

export default CreateNewTodo;