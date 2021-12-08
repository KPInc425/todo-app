import Note from "./Note.js";

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x,x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everthing except firefox 
            e.code === 22 || 
            // firefox 
            e.code === 1014 || 
            // test name field too, because code might not be present 
            // everything except Firefox 
            e.name === 'QuotoExceededError' ||
            // firefox 
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && 
            // Acknoledge QuotaExceededError only if there's somethign alread stored 
            (storage && storage.length !== 0);
    }
}

function populateStorage(library) {
    let index = 0;
    for (let note of library) {
        //console.log(book);
        localStorage.setItem(`localLibrary[${index}]`, JSON.stringify(note));
        index++;
    }
    setLibrary();
}

function setLibrary() {
    let library = [];
    for (let i = 0; i < localStorage.length; i++) {
        let tmpArr = JSON.parse(localStorage.getItem(`localLibrary[${i}]`));
        library.push(tmpArr);
    }
    // console.log(library);
    let index = 0;
    let tmpArr = [];
    library.forEach((note) => {
        tmpArr[index] =  Note(note.title, note.description, note.list, note.dateCreated, note.dueDate, note.priority, note.project, note.masterIndex);
        index++;
    });
    library = tmpArr;

    // console.log(library);
    return library;
}

export {
    storageAvailable,
    populateStorage,
    setLibrary,
}