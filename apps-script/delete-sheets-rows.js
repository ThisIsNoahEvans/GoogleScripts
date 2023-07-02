// Delete all rows in a Google Sheet, keeping the header row.
// If the header row is frozen, you will have to leave one unfrozen row (so change the 1 to a 2), insert another row, and then delete row 2 (the one left from before).

function deleteRows() {
    var sheet = SpreadsheetApp.openById('SHEET_ID').getSheetByName('SHEET_NAME') // Open the sheet
    var maxRow = sheet.getMaxRows() // The last row in the sheet
    sheet.deleteRows(2, maxRow - 1) // Delete all rows apart from the header row.
}