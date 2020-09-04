export const popup = () => {
	const body = document.querySelector('body'),
    popupCall = document.querySelector('.popup-call'),
    popupPrice = document.querySelector('.popup-price');

	body.addEventListener('click', event => {
		const target = event.target;

		if (target.matches('.popup-call-button')) {
			popupCall.style.display = 'block';
    }
    
    if (target.matches('.popup-price-button')) {
			popupPrice.style.display = 'block';
    }
    
    if (target.matches('.popup-price-call-button')) {
      popupPrice.style.display = 'none';
      popupCall.style.display = 'block';
    }

		if (target.matches('.popup-close')) {
      popupCall.style.display = 'none';
      popupPrice.style.display = 'none';
		}
	});
};
