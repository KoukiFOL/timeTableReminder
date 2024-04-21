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
        color: CalendarApp.Color.GRAY
      }
      var calendar = CalendarApp.createCalendar('時間割', calendarOptions)[0];
      console.log("時間割を書き込むカレンダーがなかったので作成しました。")
      return calendar;
    }
  }catch(error){
    console.error('エラー:' + error.message);
    return null;
  }
}