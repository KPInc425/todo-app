function SortProjectArrays(LibraryData) {
    console.log("Sort Function Called.")

    console.log(LibraryData);
    const first = "Default";
    // LibraryData.sort((a, b) => (a.project > b.project) ? 1 : -1);
    LibraryData.sort((a, b) => { 
        return a.project == first ? -1: b.project == first ? 1 : 0;
    });
    // console.log(LibraryData);

    return LibraryData;
}

export default SortProjectArrays;