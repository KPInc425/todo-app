function DisplayEditTodo() {
    let editTodoContainer = document.getElementById("editTodoContainer");

    if (editTodoContainer === null) {
        const mainContainer = document.querySelector('#content');
 
        editTodoContainer = document.createElement('div');
        editTodoContainer.classList.add("todoContainer");
        editTodoContainer.id = "editTodoContainer";

        //Form Label
        const headerItemContainer = document.createElement('div');
        headerItemContainer.classList.add("formItem");
        const containerLabel = document.createElement('h1');
        containerLabel.textContent = "Edit the Details?";
        headerItemContainer.appendChild(containerLabel);

        //Title Input
        const titleItemContainer = document.createElement('div');
        titleItemContainer.classList.add("formItem");
        const inputTitleLabel = document.createElement('label');
        inputTitleLabel.textContent = "Title";
        const inputTitle = document.createElement('input');
        inputTitle.type = "text";
        inputTitle.id = "inputTodoTitle";
        titleItemContainer.appendChild(inputTitleLabel);
        titleItemContainer.appendChild(inputTitle);



        // Description Input
        const descriptionItemContainer = document.createElement('div');
        descriptionItemContainer.classList.add("formItem");
        const inputDescriptionLabel = document.createElement('label');
        inputDescriptionLabel.textContent = "Description";
        const inputDescription = document.createElement('input');
        inputDescription.type = "text";
        inputDescription.id = "inputTodoDescription";
        descriptionItemContainer.appendChild(inputDescriptionLabel);
        descriptionItemContainer.appendChild(inputDescription);

        // List Input
        
        // used to contain only list items
        const listItemContainer = document.createElement('div');
        listItemContainer.classList.add("listItem");

        const inputListLabel = document.createElement('label');
        inputListLabel.textContent = "List item";
        const inputList = document.createElement('input');
        inputList.type = "text";
        inputList.classList.add("inputTodoListItem");

        const btnAddNewListItem = document.createElement('button');
        btnAddNewListItem.textContent = "+";
        btnAddNewListItem.id = "addNewListItem";

        // Add Lists to list container
        listItemContainer.appendChild(inputListLabel);
        listItemContainer.appendChild(inputList);
        listItemContainer.appendChild(btnAddNewListItem);

        // Due Date 
        const duedateItemContainer = document.createElement('div');
        duedateItemContainer.classList.add("formItem");
        const inputDueDateLabel = document.createElement('label');
        inputDueDateLabel.textContent = "DueDate";
        const inputDueDate = document.createElement('input');
        inputDueDate.type = "date";
        inputDueDate.id = "inputTodoDueDate";
        duedateItemContainer.appendChild(inputDueDateLabel);
        duedateItemContainer.appendChild(inputDueDate);

        // Priority 
        // Change this to radios
        const priorityItemContainer = document.createElement('div');
        priorityItemContainer.classList.add("formItem");
        const inputPriorityLabel = document.createElement('label');
        inputPriorityLabel.textContent = "Priority";
        const inputPriority = document.createElement('input');
        inputPriority.type = "text";
        inputPriority.id = "inputTodoPriority";
        priorityItemContainer.appendChild(inputPriorityLabel);
        priorityItemContainer.appendChild(inputPriority);

        // Project 
        const projectItemContainer = document.createElement('div');
        projectItemContainer.classList.add("formItem");
        const inputProjectLabel = document.createElement('label');
        inputProjectLabel.textContent = "Project";
        const inputProject = document.createElement('input');
        inputProject.type = "text";
        inputProject.id = "inputTodoProject";
        projectItemContainer.appendChild(inputProjectLabel);
        projectItemContainer.appendChild(inputProject);

        // Edit Todo Note Button
        const btnAdd = document.createElement('button');
        btnAdd.id = "btnAddEditedTodo";
        btnAdd.textContent = "Get it Done!";

        const btnCancel = document.createElement('button');
        btnCancel.id = "btnCancelEditTodo";
        btnCancel.textContent = "Cancel";

        // Appending elements to DOM

        editTodoContainer.appendChild(headerItemContainer);
        editTodoContainer.appendChild(titleItemContainer);
        editTodoContainer.appendChild(descriptionItemContainer);
        editTodoContainer.appendChild(listItemContainer);
        editTodoContainer.appendChild(duedateItemContainer);
        editTodoContainer.appendChild(priorityItemContainer);
        editTodoContainer.appendChild(projectItemContainer);
        editTodoContainer.appendChild(btnAdd);
        editTodoContainer.appendChild(btnCancel);
        mainContainer.appendChild(editTodoContainer);
    }

    
}

export default DisplayEditTodo;