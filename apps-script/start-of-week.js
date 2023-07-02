// Get the start of this current week.
function startOfWeek() {
    var dt = new Date(); 
    var currentWeekDay = dt.getDay(); // Get the current date
    var lessDays = currentWeekDay == 0 ? 6 : currentWeekDay - 1;
    var weekStart = new Date(new Date(dt).setDate(dt.getDate() - lessDays)); // Get the first day of the week (Monday)
    var weekStartDate = Utilities.formatDate(weekStart, "GMT+1", "dd/MM/YYYY") // Format the first day of the week

    return weekStartDate // Returns: 26/06/2023
}