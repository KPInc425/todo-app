import DisplayNoteLibraryDOM from "./DisplayNoteLibraryDOM.js";
import SplitArray from "./SplitArray.js";
import DisplayAddNewTodo from "./DisplayAddNewTodoDOM.js"
import CreateNewTodo from "./CreateNewTodo.js";
import DisplayEditTodo from "./DisplayEditTodoDOM";
import AddEditedTodoNote from "./AddEditedTodoNote.js";

// Adds event listeners to project cards
function ProjectCardsAddEventListeners(libraryData) {
    console.log("ProjectCardsAddEventListeners Function Called.");
    // Might want to change this to exclude the btnContainer as it fires when they get clicked.
    const projectCardNodeArray = document.querySelectorAll('.projectCard');
    console.log(projectCardNodeArray);
    projectCardNodeArray.forEach((div) => {
        div.addEventListener('click', () => {
            let projectIndex = div.getAttribute('data-index');
            console.log(projectIndex);

            //Split Array based on project
            // const projectNoteArray = SplitArray(libraryData, projectIndex);

            // console.log(projectNoteArray);
            
            // // Display notes related to project
            // DisplayNoteLibraryDOM(projectNoteArray);
            // // Needed to prevent capturing/bubbling when btn's pressed.
        })
    });
};

function NewTodoAddEventListeners(libraryData) {
    const btnNewTodo = document.getElementById('newTodo');
    console.log(btnNewTodo);

    // Display Editable box to add todo note
    btnNewTodo.addEventListener('click', () => {
        console.log("Click!");

        //call module to display editable note
        DisplayAddNewTodo(libraryData);
        

    });


}

function AddNewTodoAddEventListener(libraryData) {
    const btnAddTodo = document.getElementById('btnAddTodo');
    btnAddTodo.addEventListener('click', () => {
        const inputNewTodo = document.getElementById('inputNewTodo');
        
        if (inputNewTodo.value !== "") {
            CreateNewTodo(libraryData, inputNewTodo.value);
        }
        
    });
}

function EditTodoButtonAddEventListeners(libraryData) {
    const editBtnNodeArray = document.querySelectorAll('.btnEdit');
    console.log(editBtnNodeArray);

    editBtnNodeArray.forEach((btn) => {
        // Display Editable form to edit todo note
        btn.addEventListener('click', (e) => {
            console.log("Click!");
            e.stopPropagation();

            // retreive edited note index
            let index = btn.getAttribute('data-index');
            console.log("Index: " + index);
            console.log("libraryData Below");
            console.log(libraryData);

            DisplayEditTodo(libraryData, index);
            // addListItemEventListener();
            

            
            //call module to display editable note


        })
    })

    // NEW EVENT LISTENERS SHOULD BE CALLED FROM DOM?
    // function addListItemEventListener() {
    //     console.log("addListItemEventListener Called!");
    // }
}

function AddEditedTodoNoteEventListener(noteLibraryData) {
    const btnAddEditedToNote = document.querySelector('#btnAddEditedTodo');
    btnAddEditedToNote.addEventListener('click', () => {
            console.log("Add Button Clicked!");
            // Add edited todo note data to noteLibrary

            AddEditedTodoNote(noteLibraryData);
    })

}

function DeleteTodoButtonAddEventListeners() {
    const deleteBtnNodeArray = document.querySelectorAll('.btnDelete');
    console.log(deleteBtnNodeArray);

    deleteBtnNodeArray.forEach((btn) => {
        // Display Editable form to edit todo note
        btn.addEventListener('click', (e) => {
            console.log("Click!");

            

            e.stopPropagation();
            //call module to display editable note


        })
    })
}

function DeleteProjectButtonAddEventListeners() {
    const deleteBtnNodeArray = document.querySelectorAll('.btnDelete');
    console.log(deleteBtnNodeArray);

    deleteBtnNodeArray.forEach((btn) => {
        // Display Editable form to edit todo note
        btn.addEventListener('click', (e) => {
            console.log("Click!");

            

            e.stopPropagation();
            //call module to display editable note


        })
    })
}

function EditProjectButtonAddEventListeners(libraryData) {
    const editBtnNodeArray = document.querySelectorAll('.btnProjectEdit');
    console.log(editBtnNodeArray);

    editBtnNodeArray.forEach((btn) => {
        // Display Editable form to edit todo note
        btn.addEventListener('click', (e) => {
            console.log("Click!");
            e.stopPropagation();


        })
    })
}
        
export {
    ProjectCardsAddEventListeners,
    NewTodoAddEventListeners,
    AddNewTodoAddEventListener,
    EditTodoButtonAddEventListeners,
    DeleteProjectButtonAddEventListeners,
    EditProjectButtonAddEventListeners,
    AddEditedTodoNoteEventListener,
};

