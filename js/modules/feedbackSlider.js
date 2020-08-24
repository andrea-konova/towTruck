export const feedbackSlider = () => {
	new Swiper('.swiper-container', {
		loop: true,
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },
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
