import { NewTodoAddEventListeners } from "./AddEventListeners.js";

function DisplayNavDOM(libraryData) {
    console.log("DisplayNavDOM function Called");

    const body = document.querySelector('body');
    const navContainer = document.createElement('div');
    navContainer.id = "navContainer";
    navContainer.classList.add('flexContainerNav');

    const navLogoContainer = document.createElement('div');
    navLogoContainer.id = "navLogoContainer";
    const navLogoImg = document.createElement('img');
    navLogoImg.alt = "Nav Logo Here";

    navLogoContainer.appendChild(navLogoImg);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('flexContainerNav');

    const btn1 = document.createElement('button');
    btn1.textContent = "btn1";
    

    const btn2 = document.createElement('button');
    btn2.textContent = "btn2";
    
    const btn3 = document.createElement('button');
    btn3.textContent = "btn3";
    
    const btnNewTodo = document.createElement('button');
    btnNewTodo.textContent = "Todo+";
    btnNewTodo.id = "newTodo";

    navContainer.appendChild(navLogoContainer);

    //Append Navigation Buttons
    btnContainer.appendChild(btnNewTodo);
    btnContainer.appendChild(btn3);
    btnContainer.appendChild(btn2);
    btnContainer.appendChild(btn1);
    navContainer.appendChild(btnContainer);
    
    body.appendChild(navContainer);

    NewTodoAddEventListeners(libraryData);


}

export default DisplayNavDOM;

// Anchor navBar so always visible?
// Move navBar to left hand side