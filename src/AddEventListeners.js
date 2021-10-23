import DisplayNoteLibraryDOM from "./DisplayNoteLibraryDOM";

function ProjectCardsAddEventListeners(libraryData) {
    console.log("ProjectCardsAddEventListeners Function Called.");
    const projectCardNodeArray = document.querySelectorAll('.projectCard');
    console.log(projectCardNodeArray);
    projectCardNodeArray.forEach((div) => {
        div.addEventListener('click', () => {
            console.log("Click!");
            
            //Display All Notes from Project Catagory Clicked.
            // Make it so this function sorts list and only show single catagory
            DisplayNoteLibraryDOM(libraryData);
        })
    });
};
        
export {
    ProjectCardsAddEventListeners,
};