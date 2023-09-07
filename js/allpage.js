// const pageTabsBtn = document.querySelectorAll('.page-tabs-btn');

// pageTabsBtn.forEach((pageTab) => {
// 	pageTab.addEventListener('click', () => {
// 		pageTabsBtn.forEach((tab) => {
// 			tab.classList.remove('page-active');
// 		});
// 		pageTab.classList.add('page-active');
// 	});
// });

// const pageTabsBtn = document.querySelectorAll('.page-tabs-btn');
// const tabsContent = document.querySelectorAll('.tabs-content');

// pageTabsBtn.forEach((pageTab) => {
// 	pageTab.addEventListener('click', () => {
// 		// Remove 'page-active' class from all tabs
// 		pageTabsBtn.forEach((tab) => {
// 			tab.classList.remove('page-active');
// 		});

// 		// Add 'page-active' class to the clicked tab
// 		pageTab.classList.add('page-active');

// 		// Hide all content
// 		tabsContent.forEach((content) => {
// 			content.style.display = 'none';
// 		});

// 		// Show the corresponding content based on the data-tab attribute
// 		const tabToShow = pageTab.querySelector('h3').textContent.toLowerCase();
// 		const contentToShow = document.querySelector(`[data-tab="${tabToShow}"]`);
// 		if (contentToShow) {
// 			contentToShow.style.display = 'block';
// 		}
// 	});
// });

const pageTabsBtn = document.querySelectorAll('.page-tabs-btn');
const tabsContent = document.querySelectorAll('.tabs-content');

pageTabsBtn.forEach((pageTab) => {
	pageTab.addEventListener('click', () => {
		pageTabsBtn.forEach((tab) => {
			tab.classList.remove('page-active');
		});

		pageTab.classList.add('page-active');

		tabsContent.forEach((content) => {
			content.style.display = 'none';
		});

		const tabToShow = pageTab.querySelector('h3').textContent.toLowerCase();
		const contentToShow = document.querySelector(`[data-tab="${tabToShow}"]`);
		if (contentToShow) {
			contentToShow.style.display = 'block';
		}
	});
});
