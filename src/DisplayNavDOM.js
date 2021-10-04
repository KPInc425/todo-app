function DisplayNavDOM() {
    console.log("DisplayNAVDOM function Called");

    const body = document.querySelector('body');

    const navContainer = document.createElement('div');
    navContainer.id = "navContainer";
    navContainer.classList.add('flexContainer');

    const navLogoContainer = document.createElement('div');
    navLogoContainer.id = "navLogoContainer";
    const navLogoImg = document.createElement('img');
    navLogoImg.alt = "Nav Logo Here";

    navLogoContainer.appendChild(navLogoImg);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('flexContainer');

    const btn1 = document.createElement('button');
    btn1.textContent = "btn1";

    const btn2 = document.createElement('button');
    btn2.textContent = "btn2";
    
    const btn3 = document.createElement('button');
    btn3.textContent = "btn3";
    
    const btn4 = document.createElement('button');
    btn4.textContent = "btn4";

    navContainer.appendChild(navLogoContainer);

    //Append Navigation Buttons
    btnContainer.appendChild(btn4);
    btnContainer.appendChild(btn3);
    btnContainer.appendChild(btn2);
    btnContainer.appendChild(btn1);
    navContainer.appendChild(btnContainer);
    
    body.appendChild(navContainer);

}

export default DisplayNavDOM;