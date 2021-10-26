function SplitArray(libraryData, inputIndex) {
    console.log("SplitArray Function Called.");
    console.log("INPUT INDEX: " + inputIndex);

    let tmpArray = [];

    // console.log(libraryData);
    // console.log(inputIndex);
    let projectTitle = "";
    let index = 0;
    for (let note of libraryData) {
        if (projectTitle == "") {
            projectTitle = note.project;
        }

        if (projectTitle == note.project) {
            if (inputIndex == index) {
                // console.log(note);
                tmpArray.push(note);
                continue;
            }
        } else {
            projectTitle = note.project;
            index++;
            console.log(index);
        }   
    }

    return tmpArray;

}

export default SplitArray;