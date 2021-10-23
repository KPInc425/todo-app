import DisplayNoteLibraryDOM from "./DisplayNoteLibraryDOM";
import SplitArray from "./SplitArray";

// Adds event listeners to project cards
function ProjectCardsAddEventListeners(libraryData) {
    console.log("ProjectCardsAddEventListeners Function Called.");
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
        
export {
    ProjectCardsAddEventListeners,
};