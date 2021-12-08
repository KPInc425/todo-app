function SortNoteArrays(LibraryData) {
    console.log("Sort Function Called.")

    console.log(LibraryData);
    LibraryData.sort((a, b) => (a.title > b.title) ? 1 : -1);
    console.log(LibraryData);

    return LibraryData;
}

export default SortNoteArrays;