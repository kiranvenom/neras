// mob menu
const accordions = document.querySelectorAll('.accordion');

accordions.forEach((item) => {
	item.addEventListener('click', (event) => {
		event.stopPropagation(); // Prevent the click event from propagating
		item.classList.toggle('active');
	});
});

const openActualMenuButton = document.querySelector('.open-actual-menu-button');
const closeActualMenuButton = document.querySelector(
	'.all-menu-top .ri-close-line'
);
const mobAllMenu = document.querySelector('.mob-all-menu');

openActualMenuButton.addEventListener('click', () => {
	mobAllMenu.style.right = '0%';
});
closeActualMenuButton.addEventListener('click', () => {
	mobAllMenu.style.right = '-100%';
});
