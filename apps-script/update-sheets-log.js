// Update a Google Sheet with logging details.
// Most of my deployed Apps Script projects use a Google Sheet to store logs, as it's easier to manage for lots of projects than Apps Script's own logging system.

function updateLog(message) {
    var sheet = SpreadsheetApp.openById('SHEET_ID').getSheetByName('SHEET_NAME')
    sheet.appendRow([Utilities.formatDate(new Date(), "GMT+1", "yyyy-MM-dd' 'HH:mm:ss' '",), message]);
}