function test() {
  calendar = CalendarApp.getCalendarsByName("時間割")[0];
  var startDate = new Date(2024,2,1);
  var endDate = new Date(2024,2,2);
  events = calendar.getEvents(startDate, endDate);
  console.log(events);
}
