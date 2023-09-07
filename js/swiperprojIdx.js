const swiper2 = new Swiper('.projectSwiper', {
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	slidesPerView: 'auto',
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	speed: 1000,
	easeMode: 'ease-in-out',
});