/**
 * main関数。
 */


function main() {
  var ui = SpreadsheetApp.getUi()
  var response = ui.alert('カレンダーを作成します。', ui.ButtonSet.YES_NO);

  if (response == ui.Button.NO) {
    return;
  }

  //カレンダーの定義（もし無ければ作成）
  var calendar = createCalendar();

  //カレンダー取得通知
  if (!calendar) {
    showError('カレンダーが取得できませんでした。');
    return;
  }

  //スプレッドシートの取得
  var sheets = SpreadsheetApp.getActiveSpreadsheet();
  if (sheets) {
    console.log('シートを取得しました。');
  }

  setSchedule(sheets, calendar);
}
