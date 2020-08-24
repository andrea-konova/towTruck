export const smoothScroll = () => {
	const menu = document.querySelector('.header__menu');

	menu.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target;

		if (target.matches('a[href*="#"]')) {
			const menuId = target.getAttribute('href').substring(1);

			document.getElementById(menuId).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});

	const footerMenu = document.querySelector('.footer__nav');

	footerMenu.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target;

		if (target.matches('a[href*="#"]')) {
			const footerMenuId = target.getAttribute('href').substring(1);

			document.getElementById(footerMenuId).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});

	const footerLink = document.querySelector('.footer-logo__link');

	footerLink.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target;

		if (target.matches('a[href*="#"]')) {
			const footerLinkId = target.getAttribute('href').substring(1);

			document.getElementById(footerLinkId).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});
};
