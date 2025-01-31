const burger = document.querySelector('#burger');
const menu = document.querySelector('#burger+ul');
const form = document.querySelector('#contact_form');

// menu.style.display = 'none';

burger.addEventListener('click', function (e) {
	if (menu.style.display === 'block') {
		menu.style.display = 'none';
	} else {
		menu.style.display = 'block';
	}
});

document.addEventListener('click', function (e) {
	if (!burger.contains(e.target)) {
		if (menu.style.display === 'block') {
			menu.style.display = 'none';
		}
	}
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const formData = new FormData(form);
	const xhr = new XMLHttpRequest();
	xhr.open('POST', form.action, true);
	xhr.setRequestHeader('Accept', 'application/json');
	xhr.onreadystatechange = () => {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			form.reset();
			alert('Message Recieve! We will get back to you soon!');
		} else {
			alert('Sorry, there was an error. Please try again later.');
		}
	};
	xhr.send(formData);
});
