function setSchedule(sheets, calendar) {
  // 時間割を取得(timetable[時限][曜日])
  const sheet = sheets.getSheetByName('時間割');
  const timeTable = sheets.getRange('D2:J7').getValues();
  const startAndEnd = sheets.getSheetByName('学年歴');
  console.log(timeTable);
  //各授業の開始時間と終了時間の取得(timeTable[時限][0=開始時間, 1=終了時間])
  const tableLine = sheets.getRange('B2:C7').getValues();
  console.log(tableLine);

  // セメスターの取得
  var semester = sheets.getRange('A1').getValues();
  if (semester = '春学期') {
    var startDate = new Date(startAndEnd.getRange('B2').getValue());
    var endDate = new Date(startAndEnd.getRange('B3').getValue());
    console.log(semester + 'に登録します');
  } else if (semester = '秋学期') {
    var startDate = startAndEnd.getRange('C2').getValue();
    var endDate = startAndEnd.getRange('C3').getValue();
    console.log(semester + 'に登録します。');
  }
  //曜日リスト
  const dayList = [
    CalendarApp.Weekday.SUNDAY,
    CalendarApp.Weekday.MONDAY,
    CalendarApp.Weekday.TUESDAY,
    CalendarApp.Weekday.WEDNESDAY,
    CalendarApp.Weekday.THURSDAY,
    CalendarApp.Weekday.FRIDAY,
    CalendarApp.Weekday.SATURDAY];

  //授業開始日の曜日を取得（月曜はじめ）
  var currentDate = new Date(startDate);
  //すべての表に処理を実行
  for (var time = 0; time < timeTable.length; time++) {
    var date = new Date(currentDate);
    for (var i = 0; i < timeTable[time].length; i++) {
      //カレンダー登録に必要な要素の定義
      var day = date.getDay();
      var title = timeTable[time][day];

      var startTime = new Date(date);
      startTime.setHours(new Date(tableLine[time][0]).getHours());
      startTime.setMinutes(new Date(tableLine[time][0]).getMinutes());

      var endTime = new Date(date);
      endTime.setHours(new Date(tableLine[time][1]).getHours());
      endTime.setMinutes(new Date(tableLine[time][1]).getMinutes());

      if (title != "") {
        //情報を出力
        console.log(
          '科目名:' + title + '\n' +
          '日付' + date + '\n' +
          '開始時間:' + startTime + '\n' +
          '終了時間:' + endTime + '\n'
        )
        
        var recurrence = CalendarApp.newRecurrence().addWeeklyRule()
          .onlyOnWeekdays([dayList[date.getDay()]])
          .until(endDate);
        var event = calendar.createEventSeries(title, startTime, endTime, recurrence);
        if (event){
          console.log('追加しました。');
        }
        
      }
      date.setDate(date.getDate() + 1);
    }

  }
}

