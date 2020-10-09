
/*document.getElementsByClassName('includes')[0].addEventListener('click', () => alert("КЛИК"));
document.getElementsByClassName('includes')[1].addEventListener('click', () => alert("КЛИК"));*/


/*var ul = document.getElementById('menu');

ul.addEventListener('click', addClick);
function addClick() {	
	console.log('CLICK');
}	*/

for (let li of menu.querySelectorAll('li')) {
    let span = document.createElement('span');
    span.classList.add('show');
    li.prepend(span);
    span.append(span.nextSibling)
}

menu.onclick = function(event) {
	if (event.target.tagName != 'SPAN') return;

	let childrenContainer = event.target.parentNode.querySelector('ul');

	if (!childrenContainer) return;

	childrenContainer.hidden = !childrenContainer.hidden;
	
	if (childrenContainer.hidden) {
		event.target.classList.add('hide');
		event.target.classList.remove('show');
	} else {
		event.target.classList.add('show');
		event.target.classList.remove('hide');
	}	
}