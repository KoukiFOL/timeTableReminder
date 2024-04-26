
/*
 * judgeSemester関数
 * 現在春学期か秋学期か判定する関数
 */

function judgeSemester(sheets) {
  //今日の日付を取得
  today = new Date(2024-10-01);

  //シートから各学期の開始日、終了日を取得
  var sheet = sheets.getSheetByName('学年歴');
  var spring = {
    start: new Date(sheet.getRange('B2').getValues()),
    end: new Date(sheet.getRange('B3').getValues())
    }

  var autumn = {
    start: new Date(sheet.getRange('C2').getValues()),
    end: new Date(sheet.getRange('C3').getValues())
  }  

  if (spring.start < today && today < spring.end){
    return 'spring';
    }
  else if (autumn.start < today && today < autumn.end){
      return 'autumn';
    }
    else{
      return 'holiday';
    }
  
}