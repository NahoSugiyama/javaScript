let num = Math.floor(Math.random() * 5);

console.log('最初の値は' + num + 'です');

//変数numの値が0以外である間、numの値を出力し続ける
while(num !== 0) {
	//再代入
	num = Math.floor(Math.random() * 5);
	console.log('現在の値は' + num + 'です');
}

//1~10までの数値を順番に出力する
for (let i = 1; i <= 10; i++) {
	console.log(i);
}
