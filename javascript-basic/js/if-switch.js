//算術演算子を使った場合の戻り値を出力する
console.log(45 + 18);

//比較演算子を使った場合の戻り値を出力
console.log(45 > 18);

//等価演算子を使った場合
console.log('5' == 5);
console.log('==は値だけ判断')

//厳密等価演算子
console.log('5' === 5);
console.log('===は値と型で判断')

//0^4までのランダムな整数を代入
let num = Math.floor(Math.random() * 5);

//変数numの値を出力
console.log(num);

/*変数numの値が4であれば、「大当たりです」を出力
if (num === 4) {
	console.log('大当たりです');
}

else if(num === 3) {
	console.log('アタリです');
}

else {
	console.log('はずれです');
}

num = 20;

if (num > 10 && num < 30) {
	console.log('変数numは10より大きく、30より小さいです');
}

num = 30;

if (num === 10 || num === 30) {
	console.log('変数numは10または30です');
}

else {
	console.log('条件が成り立ちませんでした');
}
*/

switch(num) {
	case 2:
		console.log('小吉です');
		break;
	case 3:
		console.log('中吉です');
		break;
	case 4:
		console.log('大吉です');
		break;
	default:
		console.log('末吉です');
		break;
}
