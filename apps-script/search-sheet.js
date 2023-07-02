// Search a Google Sheet for a specific string value.

function searchSheet() {
    var sheet = SpreadsheetApp.openById('SHEET_ID') // Open the sheet
    var textFinder = sheet.createTextFinder('SEARCH_QUERY') // The string to search for

    try {
        var searchRow = String(textFinder.findNext().getRow()) // Get the row the value is on.
        var value = sheet.getRange(`B${searchRow}`).getValue(); // Get the specific cell - e.g. B2
    } catch (error) {
        // There was an error - likely because no match for the text finder
        Logger.log("Can't find any matches")
    }
}