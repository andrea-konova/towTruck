export const feedbackSlider = () => {
	new Swiper('.swiper-container', {
		// pagination: {
		//   el: '.projects-pagination',
		//   bulletClass: 'projects-bullet',
		//   bulletActiveClass: 'projects-bullet-active',
		//   clickable: true
		// },
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	});
};
