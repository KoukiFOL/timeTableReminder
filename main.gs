/**
 * main関数。
 */


function main() {
  //カレンダーの定義
  /*
  const CALENDAR_ID = PropertiesService.getScriptProperties().getProperty("CALENDAR_ID");
  var calendar = CalendarApp.getCalendarById(CALENDAR_ID)
  */
  //カレンダーの定義（もし無ければ作成）
  var calendar = createCalendar();
  
  //カレンダー取得通知
  if (calendar){
    console.log(calendar.getName()+'に時間割を書き込みます。')
  }else{
    console.log('カレンダーが取得できませんでした。')
    return;
  }
  
  //スプレッドシートの取得
  var sheets = SpreadsheetApp.getActiveSpreadsheet();
  if (sheets){
    console.log('シートを取得しました。');
  }

  setSchedule(sheets, calendar);
}
