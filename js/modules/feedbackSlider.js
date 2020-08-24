export const feedbackSlider = () => {
	new Swiper('.swiper-container', {
		loop: true,
		navigation: {
			nextEl: '.feedback-button-next',
			prevEl: '.feedback-button-prev',
		},
		pagination: {
			el: '.feedback-pagination',
			bulletClass: 'feedback-bullet',
			bulletActiveClass: 'feedback-bullet-active',
			clickable: true
		},
	});
};
