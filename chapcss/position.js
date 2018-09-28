var para = document.querySelector('p');

para.addEventListener('click',upDateName);

function upDateName () {
	var name = prompt('Enter a new name');
	para.innerHTML = 'Player: ' + name;
}