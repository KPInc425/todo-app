function ProjectArrays(LibraryData) {
    console.log("ProjectArrays Function Called.")

    console.log(LibraryData);
    LibraryData.sort((a, b) => (a.project > b.project) ? 1 : -1);
    console.log(LibraryData);

    return LibraryData;
}

export default ProjectArrays;