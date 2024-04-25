/**
 * createcarendar()関数
 * 「時間割」カレンダーがない場合、作成する関数。
 */

function createCalendar() {
  try {
    //すべてのカレンダーを取得
    const calendars = CalendarApp.getAllOwnedCalendars();
    var nameList = [];

    calendars.forEach((element) => nameList.push(element.getName()));

    if (nameList.find((element) => element == "時間割")) {
      calendar = CalendarApp.getCalendarsByName("時間割")[0];
      console.log("時間割を書き込むカレンダーがありました。: " + calendar.getId());
      return calendar;
    } else {

      var calendarOptions = {
        summary: 'timeTableManagerより作成',
        color: CalendarApp.Color.MUSTARD
      }
      var calendar = CalendarApp.createCalendar('時間割', calendarOptions)[0];
      console.log("時間割を書き込むカレンダーがなかったので作成しました。")
      return calendar;
    }
  }catch(error){
    showError('エラー:' + error.message);
    return null;
  }
}
