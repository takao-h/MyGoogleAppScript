// fro API request
function apiReqest() {
  var url = "https://api.github.com/users/takao-h/events"
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());
  return data;
}
function sendMessage() {
  var body = "githubにcommitしました！";
  return body;
}

function getInfo() {
  var commitCount = apiReqest().commit;
  var commitThisDay = apiReqest().created_at;
  //もしもpushが来たらメッセージを投げる
  if ()
}
