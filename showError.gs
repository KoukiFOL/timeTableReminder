function showError(error) {
  var ui = SpreadsheetApp.getUi().alert(error);
  console.error(error);
  return;
}
