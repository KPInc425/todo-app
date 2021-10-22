import Note from "./Note.js";
import DisplayNavDOM from "./DisplayNavDOM.js";
import DisplayNoteDOM from "./DisplayNoteDOM.js";
import './reset.css';
import './style.css';

const app = (() => {
    console.log("TESTING: KPINC425");

    let noteLibraryData = [];

    //First Display
    DisplayNavDOM();
    DisplayNoteDOM(noteLibraryData);

    // TESTING
    let testNoteData = {
        title: "Testing",
        description: "Testing Description....", 
        list: ["Pick up milk", "start Yoga", "List item 3"],
        dueDate: "10/31/21",
        priority: "HIGH", 
    }

    console.log(testNoteData.priority);
    let testNote = Note(testNoteData.title, testNoteData.description, testNoteData.list, testNoteData.dueDate, testNoteData.priority);
    // console.log(testNote);
    noteLibraryData.push(testNote);

    // DisplayNavDOM();
    DisplayNoteDOM(noteLibraryData);
})();

