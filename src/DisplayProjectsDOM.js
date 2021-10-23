import SortProjectArrays from "./SortProjectArrays";
import { ProjectCardsAddEventListeners } from "./AddEventListeners";

function DisplayProjectsDOM(noteLibraryData) {
    console.log("DisplayProjectsDOM function called")
    // console.log(noteLibraryData);

    const body = document.querySelector('body');
    
    const mainContainer = document.querySelector('#content');
    mainContainer.classList.add("flexContainerMain");
    //TESTING
    mainContainer.textContent = "Testing Main Container Here!";

    let index = 0;
    if (Object.keys(noteLibraryData).length !== 0) {
        mainContainer.innerHTML = "";

        // Create Project Arrays
        let sortedNoteLibraryData = SortProjectArrays(noteLibraryData);
        console.log(sortedNoteLibraryData);

        let projectTitleString = "";

        console.log(projectTitleString);

        for (let note of sortedNoteLibraryData) {
            if (index === 0) {
                projectTitleString = note.project;
               console.log(projectTitleString);
            } else if (note.project === projectTitleString) {
                console.log("CONTINUE");
                continue;
            } else {
                projectTitleString = note.project;
                console.log(projectTitleString);
            }

            const projectCard = document.createElement('div');
            projectCard.classList.add('card');
            projectCard.classList.add('projectCard');
            projectCard.setAttribute('data-index', index);

            const projectInfoContainer = document.createElement('div');
            projectInfoContainer.classList.add('infoContainer');

            const projectTitle = document.createElement('p');
            projectTitle.textContent = projectTitleString;
            projectTitle.classList.add("cardTitle");

            const projectDescription = document.createElement('p');
            projectDescription.textContent = `Example project description for ${projectTitleString}`;

            // Buttons for cards
            const btnContainer = document.createElement('div');
            btnContainer.classList.add('btnContainer');
            const btnEdit = document.createElement('button');
            btnEdit.textContent = "Edit";
            btnEdit.classList.add('btnEdit');
            btnEdit.setAttribute('data-index', index);

            const btnDelete = document.createElement('button');
            btnDelete.textContent = "Delete";
            btnEdit.classList.add('btnDelete');
            btnDelete.setAttribute('data-index', index);

            btnContainer.appendChild(btnEdit);
            btnContainer.appendChild(btnDelete);

            projectInfoContainer.appendChild(projectTitle);
            projectInfoContainer.appendChild(projectDescription);
            projectInfoContainer.appendChild(btnContainer);
            projectCard.appendChild(projectInfoContainer);
            mainContainer.appendChild(projectCard);

            
            index++;
        }

    } else {
        mainContainer.innerHTML = "";

        const projectCard = document.createElement('div');
        projectCard.classList.add('card');
        projectCard.setAttribute('data-index', index);

        const projectInfoContainer = document.createElement('div');
        projectInfoContainer.classList.add('infoContainer');

        const projectTitle = document.createElement('p');
        projectTitle.textContent = "Default Project";
        projectTitle.classList.add("cardTitle");

        const projectDescription = document.createElement('p');
        projectDescription.textContent = "Example Project";

        // Buttons for cards
        const btnContainer = document.createElement('div');
        btnContainer.classList.add('btnContainer');
        const btnEdit = document.createElement('button');
        btnEdit.textContent = "Edit";
        btnEdit.classList.add('btnEdit');
        btnEdit.setAttribute('data-index', index);

        const btnDelete = document.createElement('button');
        btnDelete.textContent = "Delete";
        btnEdit.classList.add('btnDelete');
        btnDelete.setAttribute('data-index', index);

        btnContainer.appendChild(btnEdit);
        btnContainer.appendChild(btnDelete);

        projectInfoContainer.appendChild(projectTitle);
        projectInfoContainer.appendChild(projectDescription);
        projectInfoContainer.appendChild(btnContainer);
        projectCard.appendChild(projectInfoContainer);
        mainContainer.appendChild(projectCard);
    }

    body.appendChild(mainContainer);
    ProjectCardsAddEventListeners(noteLibraryData);
}

export default DisplayProjectsDOM;