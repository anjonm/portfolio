const burger = document.querySelector('#burger');
const menu = document.querySelector('#burger+ul');
const form = document.querySelector('#contact_form');
const msgRecieve = document.querySelector('#receive');
const msgClose = document.querySelector('#close');

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

	if (e.target.id == 'receive' || e.target.id == 'close') {
		msgRecieve.classList.add('hide');
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
			msgRecieve.classList.remove('hide');
		} else {
			alert('Sorry, there was an error. Please try again later.');
		}
	};
	xhr.send(formData);
});
