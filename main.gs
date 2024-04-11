/**
 * main関数。
 */


function main() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet();
  judge = judgeSemester(sheets);
  timeTable = getTimeTable(sheets, true);
  setSchedule(timeTable);
  Logger.log(timeTable);
}

