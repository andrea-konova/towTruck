export const popupCall = () => {
	const body = document.querySelector('body'),
		popup = document.querySelector('.popup');

	body.addEventListener('click', event => {
		const target = event.target;

		if (target.matches('.popup-button')) {
			popup.style.display = 'block';
		}

		if (target.matches('.popup-close')) {
			popup.style.display = 'none';
		}
	});
};
