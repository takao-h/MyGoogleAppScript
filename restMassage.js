// 全休用
function sendRestAll(){
  var to = 'hogehuga@gmail.com';
  var message = HtmlService.createHtmlOutputFromFile("restAll").getContent();

  MailApp.sendEmail({
    to: to,
    subject : '全休',
    htmlBody : message
  });
};

// 半休
function sendRestHslf(){
  var to = 'hogehoge@gmail.com';
  var message = HtmlService.createHtmlOutputFromFile("restHalf").getContent();

  MailApp.sendEmail({
    to: to,
    subject : '半休',
    htmlBody : message
  });
};
