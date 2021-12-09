import SortProjectArrays from "./SortProjectArrays";
// import { ProjectCardsAddEventListeners } from "./AddEventListeners.js";

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
        // const sortedNoteLibraryData = noteLibraryData;
        const sortedNoteLibraryData = SortProjectArrays(noteLibraryData);
        // console.log(sortedNoteLibraryData);


        // let obj = sortedNoteLibraryData.find(o => o.project === 'Default');
        // console.log(obj);

        // let obj = sortedNoteLibraryData.find((o, i) => {
        //     if (o.project === 'Default') {

        //     }
        // })

        let projectTitleString = "";

        // console.log(projectTitleString);

        // Display each note in library that matches project clicked on
        for (let note of sortedNoteLibraryData) {
            //check if previous todoNote had the same projectName
            if (index === 0) {
                projectTitleString = note.project;
            //    console.log(projectTitleString);
            } else if (note.project === projectTitleString) {
                // console.log("CONTINUE");
                continue;
            // Change projectTitleString if its not the same as previous
            } else {
                projectTitleString = note.project;
                // console.log(projectTitleString);
            }

            // Display project
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
            btnEdit.classList.add('btnEditProject');
            btnEdit.setAttribute('data-index', index);

            const btnDelete = document.createElement('button');
            btnDelete.textContent = "Delete";
            btnDelete.classList.add('btnDeleteProject');
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

    // Display default project if no todoNotes already in array
    } else {
        mainContainer.innerHTML = "";

        const projectCard = document.createElement('div');
        projectCard.classList.add('card');
        projectCard.classList.add('projectCard');
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
        btnEdit.classList.add('btnEditProject');
        btnEdit.setAttribute('data-index', index);

        const btnDelete = document.createElement('button');
        btnDelete.textContent = "Delete";
        btnDelete.classList.add('btnDeleteProject');
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
    // ProjectCardsAddEventListeners(noteLibraryData);
    // EditProjectButtonAddEventListeners();
    // DeleteProjectButtonAddEventListeners();
}

export default DisplayProjectsDOM;