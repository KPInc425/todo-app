
import { AddNewTodoAddEventListener } from "./AddEventListeners.js"

function DisplayAddNewTodo(libraryData) {
    // Ref full page
    const mainContainer = document.querySelector('#content');

    // Create editable form 
    const newTodoContainer = document.createElement('div');
    newTodoContainer.classList.add("todoContainer");

    const containerLabel = document.createElement('h1');
    containerLabel.textContent = "What's new Todo?";

    const inputTitle = document.createElement('input');
    inputTitle.type = "text";
    inputTitle.id = "inputNewTodo";

    const btnAdd = document.createElement('button');
    btnAdd.id = "btnAddTodo";
    btnAdd.textContent = "Get it Done!";

    newTodoContainer.appendChild(containerLabel);
    newTodoContainer.appendChild(inputTitle);
    newTodoContainer.appendChild(btnAdd);

    mainContainer.appendChild(newTodoContainer);

    AddNewTodoAddEventListener(libraryData);

}

export default DisplayAddNewTodo;