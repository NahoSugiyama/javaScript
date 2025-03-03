/*東京都の天気予報データを取得するためのURL
const url = 'https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json';
//イベント処理の対象となるボタン
const button = document.getElementById('ajax-btn');

//ボタンのクリック時にイベント処理を実行
button.addEventListener('click', () => {
	//気象庁のWebサイトにリクエスト送信し、天気予報データ取得する
	fetch(url)
	//サーバーからAjaxレスポンスを受け取ったときの処理
	.then((response) => response.json()) //JSON形式のデータ二変換
	.then((data) => {
		//JSONデータから「東京の明日の天気」を抽出して表示
		const weather = data[0].timeSeries[0].areas[0].weathers[1];
		console.log('東京の明日の天気：' + weather);
	});
});*/


//ダミーデータを送信するためのURL
const url = 'https://jsonplaceholder.typicode.com/posts';
const button = document.getElementById('ajax-btn');

button.addEventListener('click', () => {
	//送信するダミーデータ
	const dummyData = {name: '侍太郎', age:30};
	
	//ダミーサーバにAjaxリクエストを送信する
	fetch(url, {
		method: 'POST',
		headers: { 'content-Type': 'application/json'},
		body: JSON.stringify(dummyData)		
	})
	
	//気象庁のWebサイトにリクエストを送信し、天気予報データを取得する
	fetch(url)
	.then((response) => response.json())
	.then((data) => {
		console.log('サーバーからの応答：\n' + JSON.stringify(data, null, 2));
		
	});
	
});