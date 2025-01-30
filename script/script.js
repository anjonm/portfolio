const navbar = document.querySelector('#navbar');
const menu = document.querySelector('#burger+ul');

navbar.addEventListener('click', function () {
	menu.classList.toggle('show');
	// alert('wah');
});
