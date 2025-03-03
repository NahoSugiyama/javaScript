const changeBtn = document.getElementById('btn');
const text = document.getElementById('text');

changeBtn.addEventListener('click', () => {
	setTimeout( () => {
		text.textContent = 'ボタンがクリックされました！';
	}, 2000);	
});