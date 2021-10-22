function DisplayNoteDom(noteLibraryData) {
    console.log("DisplayNoteDOM function Called.");
    console.log(noteLibraryData);

    const body = document.querySelector('body');
    
    const mainContainer = document.querySelector('#content');
    mainContainer.classList.add("flexContainerMain");
    //TESTING
    mainContainer.textContent = "Testing Main Container Here!";

    console.log("noteLibraryData.length: " + Object.keys(noteLibraryData).length);
    if (Object.keys(noteLibraryData).length !== 0) {
        let index = 0;

        mainContainer.innerHTML = "";

        for (let note of noteLibraryData) {
            // perhaps bringing the vars out of the block might be preferable?
            var noteCard = document.createElement('div');
            noteCard.classList.add('card');

            var noteInfoContainer = document.createElement('div');
            noteInfoContainer.classList.add('infoContainer');

            const noteTitle = document.createElement('p');
            noteTitle.textContent = note.title;
            noteTitle.classList.add("cardTitle");

            const noteDescription = document.createElement('p');
            noteDescription.textContent = note.description;

            // if there is a list we need to create DOM elements to match the length
            console.log("NoteListLength: " + note.list.length);
            if (note.list.length > 0) {

                var listContainer = document.createElement('ul');
                listContainer.innerText = "~LIST~";
                for (let i = 0; i < note.list.length; i++) {
                    const listItem = document.createElement('li');
                    listItem.textContent = note.list[i];
                    listContainer.appendChild(listItem);
                }

            }


            const noteDueDateLabel = document.createElement('p');
            noteDueDateLabel.textContent = "~Due Date~";

            const noteDueDate = document.createElement('p');
            // The Date object should be pared down to only display neccessary info
            noteDueDate.textContent = new Date(note.dueDate);

            const notePriority = document.createElement('p');
            notePriority.textContent = "Priority: " + note.priority;

            const noteDateCreatedLabel = document.createElement('p');
            noteDateCreatedLabel.textContent = "~Date Created~";
            
            const noteDateCreated = document.createElement('p'); 
            noteDateCreated.textContent = note.dateCreated;

            noteInfoContainer.appendChild(noteTitle);
            noteInfoContainer.appendChild(noteDescription);
            if (note.list.length > 0) {
                noteInfoContainer.appendChild(listContainer);
            };
            noteInfoContainer.appendChild(noteDueDateLabel);
            noteInfoContainer.appendChild(noteDueDate);
            noteInfoContainer.appendChild(notePriority);
            noteInfoContainer.appendChild(noteDateCreatedLabel);
            noteInfoContainer.appendChild(noteDateCreated);

        };

        noteCard.appendChild(noteInfoContainer);
        mainContainer.appendChild(noteCard);
    };

    body.appendChild(mainContainer);


}    

export default DisplayNoteDom;