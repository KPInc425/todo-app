import SortNoteArrays from "./SortNoteArrays";

function SplitArray(libraryData, inputIndex) {
    console.log("SplitArray Function Called.");
    // console.log("INPUT INDEX: " + inputIndex);

    let tmpArray = [];

    // console.log(libraryData);
    // console.log(inputIndex);
    let projectTitle = "";
    let projectIndex = 0;
    let index = 0;
    for (let note of libraryData) {
        // console.log(note);

        //First Iteration
        if (projectTitle == "") {
            projectTitle = note.project;
        }
        
        // console.log("projectTitle: " + projectTitle);
        // console.log(note.project);
        if (projectTitle == note.project) {
            // console.log("Match!");
            // console.log("inputIndex: " + inputIndex);
            // console.log("index: " + index);
            if (inputIndex == projectIndex) {
                // console.log("Success!!");
                // console.log(note);
                // NOT SURE THIS IS EVEN DOING ANYTHING DEBUG!
                tmpArray.push(note);
                index++;
                // console.log("Pushed to Array");
                continue;
            } else {
                // console.log("Failed!");
                // projectTitle = "";
            }
        } else {
            projectTitle = note.project;
            projectIndex++;
            index = 0;

            if (inputIndex == projectIndex) {
                tmpArray.push(note);
            }
            
            // console.log("index: " + index);
        }   
    }

    tmpArray = SortNoteArrays(tmpArray);

    return tmpArray;

}

export default SplitArray;