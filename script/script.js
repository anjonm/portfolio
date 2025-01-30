const burger = document.querySelector('#burger');
const menu = document.querySelector('#burger+ul');

menu.style.display = 'none';

burger.addEventListener('click', function (e) {
	if (menu.style.display === 'block') {
		menu.style.display = 'none';
	} else {
		menu.style.display = 'block';
	}
	// e.stopPropagation();
});

document.addEventListener('click', function (e) {
	if (!burger.contains(e.target)) {
		if (menu.style.display === 'block') {
			menu.style.display = 'none';
		}
	}
});
