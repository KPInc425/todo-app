function DisplayNoteDom(noteData) {
    console.log("DisplayNoteDOM function Called.");

    const body = document.querySelector('body');
    
    const mainContainer = document.querySelector('#content');
    //TESTING
    mainContainer.textContent = "Testing Main Container Here!";

    



    body.appendChild(mainContainer);


}    

export default DisplayNoteDom;