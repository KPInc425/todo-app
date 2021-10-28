import { AddEditedTodoNoteEventListener } from "./AddEventListeners";

function DisplayEditTodo() {
    const mainContainer = document.querySelector('#content');

    const editTodoContainer = document.createElement('div');
    editTodoContainer.classList.add("todoContainer");

    const containerLabel = document.createElement('h1');
    containerLabel.textContent = "Edit the Details?";

    //Title Input
    const inputTitleLabel = document.createElement('label');
    inputTitleLabel.textContent = "Title";
    const inputTitle = document.createElement('input');
    inputTitle.type = "text";
    inputTitle.id = "inputTodoTitle";

    // Description Input
    const inputDescriptionLabel = document.createElement('label');
    inputDescriptionLabel.textContent = "Description";
    const inputDescription = document.createElement('input');
    inputDescription.type = "text";
    inputDescription.id = "inputTodoDescription";

    // List Input
    // next container used to hold list input and button to add new list item
    const inputListContainer = document.createElement('div');
    // used to contain only list items
    const ListContainer = document.createElement('div');
    const inputListLabel = document.createElement('label');
    inputListLabel.textContent = "List item";
    const inputList = document.createElement('input');
    inputList.type = "text";
    inputList.id = "inputTodoList";

    const btnAddNewListItem = document.createElement('button');
    btnAddNewListItem.textContent = "+";
    btnAddNewListItem.id = "addNewListItem";

    // Add Lists to list container
    ListContainer.appendChild(inputListLabel);
    ListContainer.appendChild(inputList);
    inputListContainer.appendChild(ListContainer);
    //compine List container with button
    inputListContainer.appendChild(btnAddNewListItem);



    // Due Date 
    const inputDueDateLabel = document.createElement('label');
    inputDueDateLabel.textContent = "DueDate";
    const inputDueDate = document.createElement('input');
    inputDueDate.type = "date";
    inputDueDate.id = "inputTodoDueDate";


    // Priority 
    // Change this to radios
    const inputPriorityLabel = document.createElement('label');
    inputPriorityLabel.textContent = "Priority";
    const inputPriority = document.createElement('input');
    inputPriority.type = "text";
    inputPriority.id = "inputTodoPriority";

    // Project 

    const inputProjectLabel = document.createElement('label');
    inputProjectLabel.textContent = "Project";
    const inputProject = document.createElement('input');
    inputProject.type = "text";
    inputProject.id = "inputTodoProject";

    const btnAdd = document.createElement('button');
    btnAdd.id = "btnAddEditedTodo";
    btnAdd.textContent = "Get it Done!";

    editTodoContainer.appendChild(containerLabel);
    editTodoContainer.appendChild(inputTitleLabel);
    editTodoContainer.appendChild(inputTitle);

    editTodoContainer.appendChild(inputDescriptionLabel);
    editTodoContainer.appendChild(inputDescription);

    editTodoContainer.appendChild(inputListContainer);

    editTodoContainer.appendChild(inputDueDateLabel);
    editTodoContainer.appendChild(inputDueDate);

    editTodoContainer.appendChild(inputPriorityLabel);
    editTodoContainer.appendChild(inputPriority);

    editTodoContainer.appendChild(inputProjectLabel);
    editTodoContainer.appendChild(inputProject);

    editTodoContainer.appendChild(btnAdd);

    mainContainer.appendChild(editTodoContainer);

    AddEditedTodoNoteEventListener();

}

export default DisplayEditTodo;