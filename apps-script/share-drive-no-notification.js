// Share a file in Google Drive without sending a notification email.
// The standard DriveApp cannot do this.
// You will need to add the Drive v2 Service within Apps Script.
// More: https://developers.google.com/drive/api/reference/rest/v2/permissions/insert



function shareDriveWithoutNotification(fileID, email) {
    Drive.Permissions.insert(
        {
            role: 'reader', // owner, writer, reader
            type: 'user',
            value: email,
        },
        file.getId(),
        {
            supportsAllDrives: 'true', // Required if the file is in a Shared Drive.
            sendNotificationEmails: 'false', // Don't send the notification email
        })
}

