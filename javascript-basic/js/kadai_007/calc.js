let num = 15;
let surplus_3 = num % 3;
let surplus_5 = num % 5;



if (surplus_3 === 0 && surplus_5 === 0) {
	
	console.log('3と5の倍数です');
}

else if (surplus_5 === 0) {
	console.log('5の倍数です');
}

else if(surplus_3 === 0) {
	console.log('3の倍数です');
}

else {
	console.log(num);
}
