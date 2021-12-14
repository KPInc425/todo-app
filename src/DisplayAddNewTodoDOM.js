function DisplayAddNewTodo() {
    const toDoContainer = document.querySelector('.todoContainer');
    //Prevents duplication of element, by resetting visibility
    if (toDoContainer !== null) {
        toDoContainer.style.display = "flex";
    } else {
        console.log(toDoContainer);
    
        // Ref full page
        const mainContainer = document.querySelector('#content');

        // Create editable form 
        const newTodoContainer = document.createElement('div');
        newTodoContainer.classList.add("todoContainer");
        newTodoContainer.id = "NewTodoContainer";

        const containerLabel = document.createElement('h1');
        containerLabel.textContent = "What's new Todo?";

        const inputTitle = document.createElement('input');
        inputTitle.type = "text";
        inputTitle.id = "inputNewTodo";

        const btnAdd = document.createElement('button');
        btnAdd.id = "btnAddTodo";
        btnAdd.textContent = "Get it Done!";

        const btnCancel = document.createElement('button');
        btnCancel.id = "btnCancelAddTodo";
        btnCancel.textContent = "Cancel";

        newTodoContainer.appendChild(containerLabel);
        newTodoContainer.appendChild(inputTitle);
        newTodoContainer.appendChild(btnAdd);
        newTodoContainer.appendChild(btnCancel);

        mainContainer.appendChild(newTodoContainer);
    }

    

    

}

export default DisplayAddNewTodo;