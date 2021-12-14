function TodoLibrary(...args) {
    //Initalize Library
    // console.log(args);
    if (args.length === 0) {
        window.noteLibraryData = [];
    }
    //Set Global Library with input
    if (args.length === 1) {
        window.noteLibraryData = args[0];
    }
    // Edit todo note by masterIndex (THE NOTE IS BEING EDITED DIRECTLY....for some reason...)
    // if (args.length === 2) {
    //     const editedNote = args[0];
    //     const inputMasterIndex = args[1];
    //     window.noteLibraryData.find(obj => {
    //         if (obj.masterIndex === inputMasterIndex) {
    //             // console.log(obj);
    //             // console.log(window.noteLibraryData);
    //             // console.log(editedNote);
    //         }
    //     })
    // }
    // arg[2] = append/copy/split/etc. do function

    return window.noteLibraryData;
}

export default TodoLibrary;