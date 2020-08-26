export const sendForm = () => {
	const quoteForm = document.querySelector('.quote__form'),
		popupForm = document.querySelector('.popup__form'),
		regExpName = /^[а-яА-Я0-9_-]{2,16}$/,
		regExpEmail = /^[a-z0-9._%+-]+@[a-z0-9-]+.+.[a-z]{2,4}$/,
    regExpTel = /^(\+)?[78]([-()]*\d{10,12})/,
    popUpWindows = document.querySelectorAll('.popup');

	let isValidate = false;

	const errorMessage = 'Что-то пошло не так...',
		loadMessage = 'Загрузка...',
		successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

	const statusMessage = document.createElement('div');
	statusMessage.style.cssText = 'font-size: 1rem;';
	statusMessage.style.color = '#111111';

	const hideStatusMessage = () => {
		statusMessage.style.display = 'none';
  };
  
  const hidePopup = () => {
		popUpWindows.forEach(elem => {
			elem.style.display = 'none';
		});
  };

	const postDate = body => fetch('./telegram.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'aplication/json'
		},
		body: JSON.stringify(body),
		credentials: 'include'
	});

	const postForm = target => {
		const form = target;
		form.appendChild(statusMessage);
		statusMessage.style.display = 'block';
		statusMessage.textContent = loadMessage;
		const formData = new FormData(form);
		const body = {};
		formData.forEach((val, key) => {
			body[key] = val;
		});
		postDate(body)
			.then(request => {
				if (request.status !== 200) {
					throw new Error('status network not 200');
				}
				statusMessage.textContent = successMessage;
        setTimeout(hideStatusMessage, 3000);
        setTimeout(hidePopup, 4000);
			})
			.catch(error => {
				statusMessage.textContent = errorMessage;
        setTimeout(hideStatusMessage, 3000);
        setTimeout(hidePopup, 4000);
				console.error(error);
			});

		const inputs = form.querySelectorAll('input');
		for (let index = 0; index < inputs.length; index++) {
			inputs[index].value = '';
		}
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
				elem.nextElementSibling.textContent = 'Введите корректный телефон';
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
		if (elem.classList.contains('input')) {
			elem.addEventListener('blur', () => {
				validateElem(elem);
			});
		}
	}

	for (const elem of popupForm.elements) {
		if (elem.classList.contains('input')) {
			elem.addEventListener('blur', () => {
				validateElem(elem);
			});
		}
	}

	document.addEventListener('submit', event => {
		event.preventDefault();
		const target = event.target;

		for (const elem of target.elements) {
			if (elem.classList.contains('input')) {
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
      postForm(target);
			// target.reset();
		}
	});

};
