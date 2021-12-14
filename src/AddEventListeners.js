import DisplayNoteLibraryDOM from "./DisplayNoteLibraryDOM.js";
import SplitArray from "./SplitArray.js";
import DisplayAddNewTodo from "./DisplayAddNewTodoDOM.js"
import CreateNewTodo from "./CreateNewTodo.js";
import DisplayEditTodo from "./DisplayEditTodoDOM";
import AddEditedTodoNote from "./AddEditedTodoNote.js";

// Adds event listeners to project cards
function ProjectCardsAddEventListeners() {
    console.log("ProjectCardsAddEventListeners Function Called.");
    // Might want to change this to exclude the btnContainer as it fires when they get clicked.
    const projectCardNodeArray = document.querySelectorAll('.projectCard');
    const libraryData = window.noteLibraryData;
    
    // console.log(projectCardNodeArray);
    
    projectCardNodeArray.forEach((div) => {
        div.addEventListener('click', () => {
            let projectIndex = div.getAttribute('data-index');
            // console.log(projectIndex);

            // Split Array based on project

            const projectNoteArray = SplitArray(libraryData, projectIndex);
            
            // Display notes related to project
            DisplayNoteLibraryDOM(projectNoteArray, projectIndex);
            DeleteTodoButtonAddEventListeners();
            // Add functionality to Edit buttons on todo cards
            EditTodoButtonAddEventListeners(projectNoteArray);
        })
    });
};

function NewTodoAddEventListeners() {
    const btnNewTodo = document.getElementById('newTodo');
    // console.log(btnNewTodo);

    // Display Editable box to add todo note
    btnNewTodo.addEventListener('click', () => {
        console.log("Click newTodo!");

        //call module to display editable note
        DisplayAddNewTodo();
    
        AddNewTodoAddEventListener();
        

    });


}

function AddNewTodoAddEventListener() {
    const btnAddTodo = document.getElementById('btnAddTodo');
    btnAddTodo.addEventListener('click', () => {
        const inputNewTodo = document.getElementById('inputNewTodo');
        //Fetch master library data
        // const libraryData = window.noteLibraryData;
        
        // console.log("Library Data BeloW");
        // console.log(libraryData);

        if (inputNewTodo.value !== "") {
            CreateNewTodo(inputNewTodo.value);
        }
        
    });

    const btnCancelAddTodo = document.getElementById('btnCancelAddTodo');
    const toDoContainer = document.getElementById('NewTodoContainer');
    btnCancelAddTodo.addEventListener('click', () => {
        console.log("Clicked Cancel!");
        toDoContainer.style.display = "none";
    })

    
}

function ReturnToProjectsAddEventListeners() {
    const btnProjectReload = document.getElementById('btnProjects');
    btnProjectReload.addEventListener('click', () => {
        location.reload();
    })
    
}

function EditTodoButtonAddEventListeners(currentLibraryData) {
    const editBtnNodeArray = document.querySelectorAll('.btnEdit');
    // console.log(editBtnNodeArray);

    editBtnNodeArray.forEach((btn) => {
        // Display Editable form to edit todo note
        btn.addEventListener('click', (e) => {
            console.log("Click!");
            e.stopPropagation();

            // retreive edited note index
            let index = btn.getAttribute('data-index');
            // console.log("Index: " + index);
            // console.log("libraryData Below");
            // console.log(libraryData);

            DisplayEditTodo();

            AddEditedTodoNoteEventListener(currentLibraryData, index);


        });

    // NEW EVENT LISTENERS SHOULD BE CALLED FROM DOM?
    // function addListItemEventListener() {
    //     console.log("addListItemEventListener Called!");
    });
}

function AddEditedTodoNoteEventListener(currentLibraryData, index) {
    const editTodoContainer = document.getElementById('editTodoContainer');
    const btnAddEditedToDoNote = document.querySelector('#btnAddEditedTodo');
    const btnCancelAddEditedToDoNote = document.getElementById('btnCancelEditTodo');

    btnAddEditedToDoNote.addEventListener('click', () => {
        console.log("Add Button Clicked!");
        // Add edited todo note data to noteLibrary
        // console.log(noteLibraryData);
        //Check for empty input
        const inputTitle = document.getElementById("inputNewTodo");
        if (inputTitle !== "") {
            AddEditedTodoNote(currentLibraryData, index);
            // console.log(currentLibraryData);
            console.log(window.noteLibraryData);

            // populateStorage(window.noteLibraryData);
            
    
            editTodoContainer.remove();
            EditTodoButtonAddEventListeners(currentLibraryData);

        }

        
    })

    btnCancelAddEditedToDoNote.addEventListener('click', () => {
        editTodoContainer.remove();
    })

}

function DeleteTodoButtonAddEventListeners() {
    const deleteBtnNodeArray = document.querySelectorAll('.btnDelete');
    // console.log(deleteBtnNodeArray);

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
    const deleteBtnNodeArray = document.querySelectorAll('.btnDeleteProject');
    // console.log(deleteBtnNodeArray);

    deleteBtnNodeArray.forEach((btn) => {
        // Display Editable form to edit todo note
        btn.addEventListener('click', (e) => {
            console.log("Click Delete Project!");

            

            e.stopPropagation();
            //call module to display editable note


        })
    })
}

function EditProjectButtonAddEventListeners() {
    const editBtnNodeArray = document.querySelectorAll('.btnEditProject');
    // console.log(editBtnNodeArray);

    editBtnNodeArray.forEach((btn) => {
        // Display Editable form to edit todo note
        btn.addEventListener('click', (e) => {
            console.log("Clicked Edit Project!");
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
    DeleteTodoButtonAddEventListeners,
    ReturnToProjectsAddEventListeners,

};

