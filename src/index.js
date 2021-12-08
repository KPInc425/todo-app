import Note from "./Note.js";
import DisplayNavDOM from "./DisplayNavDOM.js";
import DisplayNoteLibraryDOM from "./DisplayNoteLibraryDOM.js";
import DisplayProjectsDOM from "./DisplayProjectsDOM.js";
import { ProjectCardsAddEventListeners, EditProjectButtonAddEventListeners, DeleteProjectButtonAddEventListeners } from "./AddEventListeners.js";
import './reset.css';
import './style.css';
import { storageAvailable, setLibrary, populateStorage } from "./CheckLocalStorage.js";

const app = (() => {
    console.log("TESTING: KPINC425");

    let noteLibraryData = [];


    //Testing
    // let list = ["listItem1", "listItem2", "listItem3", "listItem4"];

    // const testNote1 = Note("Another Project - Note1", "description1", list, false, "10/28/22", "LOW", "Another Project", false);
    // console.log("TestNote1"); 
    // console.log(testNote1);
    // const testNote2 = Note("Medium Priority - Note1", "description2", list, false, "10/29/22", "MEDIUM", "Medium Priority", false);
    // const testNote3 = Note("Default - Note1", "description3", list, false, "10/30/22", "HIGH", "Default", false);
    // const testNote4 = Note("Default - Note2", "description4", list, false, "10/31/22", "HIGH", "Default", false);

    // noteLibraryData = [testNote1, testNote2, testNote3, testNote4];
    // console.log(noteLibraryData);

    //Testing End!



    if(storageAvailable('localStorage')) {
        console.log("Local Storage is Available.");
    } else {
        console.log("NO LOCAL STORAGE AVAILABLE.");
    }

    if (localStorage.length > 0) {
        // If storage IS already populated
        noteLibraryData = setLibrary();
    } else {
        // If Storage is NOT already populated
        noteLibraryData = [testNote1, testNote2, testNote3, testNote4];
        populateStorage(noteLibraryData);
    }

    //First Display
    DisplayNavDOM(noteLibraryData);
    DisplayProjectsDOM(noteLibraryData);
    ProjectCardsAddEventListeners(noteLibraryData);
    // DisplayNoteLibraryDOM(noteLibraryData);
    // console.log("noteLibraryData.length " + noteLibraryData.length);


    
    // // // TESTING



    // let testNoteData = {
    //     title: "Testing",
    //     description: "Testing Description....", 
    //     list: ["Pick up milk", "start Yoga", "List item 3"],
    //     dueDate: "10/31/21",
    //     priority: "HIGH", 
    //     project: "Default",
    // }

    // let testNoteData2 = {
    //     title: "Testing New Project",
    //     description: "Testing Description again....", 
    //     list: ["Pick up strawberries", "start new project", "List item 3"],
    //     dueDate: "5/31/21",
    //     priority: "LOW", 
    //     project: "New Project",
    // }

    // let testNoteData3 = {
    //     title: "Testing Again",
    //     description: "Testing Description again....", 
    //     list: ["Pick up strawberries", "start new project", "List item 3"],
    //     dueDate: "5/31/21",
    //     priority: "LOW", 
    //     project: "New Project Again",
    // }

    // let testNoteData4 = {
    //     title: "Testing More",
    //     description: "Testing Description again....", 
    //     list: ["Pick up strawberries", "start new project", "List item 3"],
    //     dueDate: "5/31/21",
    //     priority: "LOW", 
    //     project: "Testing More",
    // }

    // console.log(testNoteData.priority);
    // let testNote = Note(testNoteData.title, testNoteData.description, testNoteData.list, testNoteData.dueDate, testNoteData.priority, testNoteData.project);
    // noteLibraryData.push(testNote);
    // // noteLibraryData.push(testNote);
    // // noteLibraryData.push(testNote);
    // // noteLibraryData.push(testNote);

    // let testNote2 = Note(testNoteData2.title, testNoteData2.description, testNoteData2.list, testNoteData2.dueDate, testNoteData2.priority, testNoteData2.project);
    // noteLibraryData.push(testNote2);
    // // noteLibraryData.push(testNote2);
    // // noteLibraryData.push(testNote2);
    // // noteLibraryData.push(testNote2);    

    // let testNote3 = Note(testNoteData3.title, testNoteData3.description, testNoteData3.list, testNoteData3.dueDate, testNoteData3.priority, testNoteData3.project);
    // noteLibraryData.push(testNote3);
    // // noteLibraryData.push(testNote3);
    // // noteLibraryData.push(testNote3);
    // // noteLibraryData.push(testNote3);

    // let testNote4 = Note(testNoteData4.title, testNoteData4.description, testNoteData4.list, testNoteData4.dueDate, testNoteData4.priority, testNoteData4.project);
    // // console.log(testNote);
    // noteLibraryData.push(testNote4);
    // // noteLibraryData.push(testNote4);
    // // noteLibraryData.push(testNote4);
    // // noteLibraryData.push(testNote4);
    
    // DisplayProjectsDOM(noteLibraryData);
    // Add eventListeners to currently displayed elements
    

    EditProjectButtonAddEventListeners();
    DeleteProjectButtonAddEventListeners();

    // // DisplayNavDOM();
    // DisplayNoteLibraryDOM(noteLibraryData);
})();

