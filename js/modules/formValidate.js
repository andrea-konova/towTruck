export const formValidate = () => {
	const quoteForm = document.querySelector('.quote__form'),
		regExpName = /^[а-я0-9_-]{2,16}$/,
		regExpEmail = /^[a-z0-9._%+-]+@[a-z0-9-]+.+.[a-z]{2,4}$/,
		regExpTel = /^(\+)?[78]([-()]*\d{10,12})/;

	let isValidate = false;

	const submit = () => {
		alert('Данные отправленны');
	};

	const validateElem = elem => {
		if (elem.name === 'userName') {
			if (!regExpName.test(elem.value) && elem.value !== '') {
				elem.nextElementSibling.textContent = 'Введите корректное имя';
				isValidate = false;
			} else {
				elem.nextElementSibling.textContent = '';
				isValidate = true;
			}
		}
		if (elem.name === 'userEmail') {
			if (!regExpEmail.test(elem.value) && elem.value !== '') {
				elem.nextElementSibling.textContent = 'Введите корректный Email';
				isValidate = false;
			} else {
				elem.nextElementSibling.textContent = '';
				isValidate = true;
			}
		}
		if (elem.name === 'userPhone') {
			if (!regExpTel.test(elem.value) && elem.value !== '') {
				elem.nextElementSibling.textContent = 'Введите корректный Email';
				isValidate = false;
			} else {
				elem.nextElementSibling.textContent = '';
				isValidate = true;
			}
		}
		if (elem.name === 'userSubject' || elem.name === 'userMessage') {
			if (elem.value === '') {
				elem.nextElementSibling.textContent = 'Заполните поле';
				isValidate = false;
			} else {
				elem.nextElementSibling.textContent = '';
				isValidate = true;
			}
		}
	};

	for (const elem of quoteForm.elements) {
		if (elem.classList.contains('quote__input')) {
			elem.addEventListener('blur', () => {
				validateElem(elem);
			});
		}
	}

	quoteForm.addEventListener('submit', event => {
		event.preventDefault();

		for (const elem of quoteForm.elements) {
			if (elem.classList.contains('quote__input')) {
				if (elem.value === '') {
					elem.nextElementSibling.textContent = 'Данное поле не заполненно';
					isValidate = false;
				} else {
					elem.nextElementSibling.textContent = '';
					isValidate = true;
				}
			}
		}

		if (isValidate) {
			submit();
			quoteForm.reset();
		}
	});
};
