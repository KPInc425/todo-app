function SplitArray(libraryData, inputIndex) {
    console.log("SplitArray Function Called.");
    // console.log("INPUT INDEX: " + inputIndex);

    let tmpArray = [];

    // console.log(libraryData);
    // console.log(inputIndex);
    let projectTitle = "";
    let index = 0;
    for (let note of libraryData) {
        if (projectTitle == "") {
            projectTitle = note.project;
        }
        // console.log("projectTitle: " + projectTitle);
        // console.log("note.project: " + note.project);
        if (projectTitle == note.project) {
            // console.log("Match!");
            // console.log("inputIndex: " + inputIndex);
            // console.log("index: " + index);
            if (inputIndex == index) {
                // console.log("Success!!");
                // console.log(note);
                tmpArray.push(note);
                // console.log("Pushed to Array");
                continue;
            } else {
                // console.log("Failed!");
                projectTitle = "";
                index++;
            }
        } else {
            projectTitle = note.project;
            index++;
            // console.log("index: " + index);
        }   
    }

    return tmpArray;

}

export default SplitArray;