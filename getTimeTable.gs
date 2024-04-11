// @ts-nocheck
function getTimeTable(sheets, mics) {
  var sheet = sheets.getSheetByName('時間割');
  var timeTableArray = sheet.getRange('D2:I7').getValues();

  var timeTable = {
    monday: sheet.getRange('D2:D7').getValues(),
    tuesday: sheet.getRange('E2:E7').getValues(),
    wednesday: sheet.getRange('F2:F7').getValues(),
    thursday: sheet.getRange('G2:G7').getValues(),
    friday: sheet.getRange('H2:H7').getValues(),
    saturday: sheet.getRange('I2:I7').getValues(),
    }

  if (mics == true){
    var sheet = sheets.getSheetByName('MiCS');
    var micsTimeTable = {
    monday: sheet.getRange('D2:D7').getValues(),
    tuesday: sheet.getRange('E2:E7').getValues(),
    wednesday: sheet.getRange('F2:F7').getValues(),
    thursday: sheet.getRange('G2:G7').getValues(),
    friday: sheet.getRange('H2:H7').getValues(),
    saturday: sheet.getRange('I2:I7').getValues(),
    }
    tablesJson = {
      timeTable: timeTable,
      micsTimeTable: micsTimeTable
    }
    return tablesJson;
    }else{
      return tables
    }
  


  
  
}
