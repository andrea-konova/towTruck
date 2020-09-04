import { preloader } from './modules/preloader.js';
import { burgerMenu } from './modules/burgerMenu.js';
import { smoothScroll } from './modules/smoothScroll.js';
import { popup } from './modules/popup.js';
import { mainSlider } from './modules/mainSlider.js';
import { feedbackSlider } from './modules/feedbackSlider.js';
import { sendForms } from './modules/sendForms.js';

new WOW().init();

preloader();
burgerMenu();
smoothScroll();
popup();
mainSlider();
feedbackSlider();
sendForms();
