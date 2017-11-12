function fetchSchedules() {
  // mail adress
  var EMAIL = 'hoge@gmail.com';

  // sheet name
  var SHEET_NAME = 'sheet_name';
  // start clomun number
  var RANGE = 2;
  // time format
  var FORMAT_TIME = 'hh:mm';

  // get sheet info
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME).clear();

  // get calender info
  var calender = CalendarApp.getCalendarById(EMAIL);
  // get Event
  var schedules = calender.getEventsForDay(new Date());



  // 予定を繰り返し出力する
  for(var index = 0; index < schedules.length; index++) {
    var count = 0;

    if (schedules[index].getTitle().match(/【あぽ】|【アポ】|【ｱﾎﾟ】|【apo】|【あポ】|【アぽ】/i)){
      count++;
    }
    var range = RANGE + index;
    // insert name
    sheet.getRange(range, 1).setValue('your_name')

    // 開始時間を出力
    // sheet.getRange(range, 2).setValue(schedules[index].getStartTime()).setNumberFormat(FORMAT_TIME);
    // 終了時間を出力
    // sheet.getRange(range, 3).setValue(schedules[index].getEndTime()).setNumberFormat(FORMAT_TIME);

    // Output matched condition
    sheet.getRange(range, 4).setValue(count);
  }
}
