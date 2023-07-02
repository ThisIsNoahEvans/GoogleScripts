// Search a Drive folder for a file with a given name.

function searchDrive(fileName) {
    var driveFolder = DriveApp.getFolderById('FOLDER_ID').getFiles() // Get all the files in the folder

    while (driveFolder.hasNext()) { // While we haven't searched every one
        var file = driveFolder.next(); // Get this file
        if (file.getName() == fileName) { // Compare the name to the file we want
            // Match! Return the Drive file ID.
            return file.getId();
        }
    }

}