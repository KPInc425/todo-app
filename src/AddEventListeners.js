import DisplayNoteLibraryDOM from "./DisplayNoteLibraryDOM.js";
import SplitArray from "./SplitArray.js";
import DisplayAddNewTodo from "./DisplayAddNewTodoDOM.js"
import CreateNewTodo from "./CreateNewTodo.js";

// Adds event listeners to project cards
function ProjectCardsAddEventListeners(libraryData) {
    console.log("ProjectCardsAddEventListeners Function Called.");
    // Might want to change this to exclude the btnContainer as it fires when they get clicked.
    const projectCardNodeArray = document.querySelectorAll('.projectCard');
    console.log(projectCardNodeArray);
    projectCardNodeArray.forEach((div) => {
        div.addEventListener('click', () => {
            // console.log("Click!");
            // console.log(div);
            let projectIndex = div.getAttribute('data-index');
            console.log(projectIndex);

            //Split Array based on project
            const projectNoteArray = SplitArray(libraryData, projectIndex);

            console.log(projectNoteArray);
            
            // Display notes related to project
            DisplayNoteLibraryDOM(projectNoteArray);
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

function EditButtonAddEventListeners() {
    const editBtnNodeArray = document.querySelectorAll('.btnEdit');
    console.log(editBtnNodeArray);

    editBtnNodeArray.forEach((btn) => {
        // Display Editable form to edit todo note
        btn.addEventListener('click', () => {
            console.log("Click!");

            //call module to display editable note


        })
    })
}
        
export {
    ProjectCardsAddEventListeners,
    NewTodoAddEventListeners,
    AddNewTodoAddEventListener,
};

