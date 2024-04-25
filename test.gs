function test() {
  var error = "hello";
  sheets = SpreadsheetApp.getActiveSpreadsheet().
  sheets.getUi().alert(error);
  console.error(error);
  return;
}
