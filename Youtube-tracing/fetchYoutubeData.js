

function fetchYoutubeData(){
  //JSONで情報の取得
  var VIDEO_ID = "hoge";
  var API_KEY = "fugafuga";
  var BASE_URL = "https://www.googleapis.com/youtube/v3/videos?id=";
  var url =  BASE_URL + VIDEO_ID"&key=" + API_KEY + "&part=snippet,statistics&fields=items(id,snippet,statistics)";
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());
  return data;

  var sheet = SpreadsheetApp.getActive().getSheetByName('sheet1');
  var likeRate = requestEvaluation().items[0].statistics.likeCount/requestEvaluation().items[0].statistics.viewCount*100;
  var commentRate = requestEvaluation().items[0].statistics.commentCount/requestEvaluation().items[0].statistics.viewCount*100;
  sheet.appendRow([currentdate(), requestEvaluation().items[0].statistics.viewCount, requestEvaluation().items[0].statistics.likeCount, requestEvaluation().items[0].statistics.commentCount, likeRate + "%", commentRate + "%"]);

  Logger.log();
}
  //日付データ
 function currentdate() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();

	//出力用
	var s = year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分" + sec + "秒";
	return s;
 }
