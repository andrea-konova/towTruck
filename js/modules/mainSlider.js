export const mainSlider = () => {
	new Swiper('.section-hero__swiper-container', {
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
    },
	});
};
 