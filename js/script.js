// video
const openIframe = document.querySelector('.openIframe');
const closeIframe = document.querySelector('#closeIframe');
const video = document.querySelector('.video');

const arrowUpElements = document.querySelectorAll('.ri-arrow-up-line');
arrowUpElements.forEach(function (arrowUp) {
	arrowUp.addEventListener('click', function () {
		window.scrollTo(0, 0);
	});
});

const target = document.querySelector('#target');
const results = Splitting({ target: target, by: 'words' });

const tl = gsap.timeline();

tl.from('.word', {
	y: 50,
	stagger: 0.03,
	opacity: 0,
	ease: 'back',
});
tl.from('.cta', {
	y: 50,
	stagger: 0.05,
	opacity: 0,
	ease: 'back',
});
tl.from('.ri-play-circle-line', {
	y: 50,
	stagger: 0.05,
	opacity: 0,
	ease: 'back',
});

gsap.from('.excellence-list', {
	y: 100,
	stagger: 0.09,
	opacity: 0,
	ease: 'back',
	scrollTrigger: {
		trigger: '.excellence-list',
		start: 'top 60%',
		end: 'top 30%',
		onEnter: startCounting,
	},
});

function startCounting() {
	const counters = document.querySelectorAll('.exprets .excellence-list > h1');
	const speed = 15;

	counters.forEach((counter) => {
		const targetValue = parseInt(counter.textContent, 10);
		let currentValue = 0;

		const interval = setInterval(() => {
			if (currentValue >= targetValue) {
				clearInterval(interval);
				return;
			}

			currentValue++;
			counter.textContent = `${currentValue}+`;
		}, speed);
	});
}

openIframe.addEventListener('click', () => {
	video.style.top = '0%';
});
video.addEventListener('click', () => {
	video.style.top = '-100%';
});
closeIframe.addEventListener('click', () => {
	video.style.top = '-100%';
});
