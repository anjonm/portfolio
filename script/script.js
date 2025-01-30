const burger = document.querySelector('#burger');
const menu = document.querySelector('#burger+ul');

navbar.addEventListener('click', function (e) {
	menu.classList.toggle('show');
	e.stopPropagation();
});

document.addEventListener('click', function (e) {
	if (!burger.contains(e.target)) {
		menu.classList.remove('show');
	}
});
