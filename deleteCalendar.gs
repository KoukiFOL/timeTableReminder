function deleteCalendar() {
  try{
  calendar = CalendarApp.getCalendarsByName("時間割")[0];
  var sheets = SpreadsheetApp.getActiveSpreadsheet();
  var startAndEnd = sheets.getSheetByName('学年歴');
  var semester = sheets.getRange('A1').getValues();
  if (semester = '春学期') {
    var startDate = new Date(startAndEnd.getRange('B2').getValue());
    var endDate = new Date(startAndEnd.getRange('B3').getValue());
    console.log(semester + 'の時間割を削除します。');
  } else if (semester = '秋学期') {
    var startDate = startAndEnd.getRange('C2').getValue();
    var endDate = startAndEnd.getRange('C3').getValue();
    console.log(semester + 'の時間割を削除します。');
  }

  var events = calendar.getEvents(startDate, endDate);
  if (events === []){
    console.error("イベントがありませんでした");
    return;
  }
  
  events.forEach((element) => {
    element.deleteEvent();
    //console.log(element.getName() + 'を削除しました');
  })
  console.log("すべてのイベントを削除しました。");
  }catch(error){
    console.error(error);
  }
  return; 
}
