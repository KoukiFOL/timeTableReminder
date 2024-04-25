function showError(error) {
  var error = "hello";
  var ui = SpreadsheetApp.getUi().alert(error);
  console.error(error);
  return;
}
