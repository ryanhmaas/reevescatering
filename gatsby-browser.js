/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const removeOpen = () => {
	if (typeof document !== 'undefined') {
		let openDropdown = document.querySelectorAll('.nav__drop-group.-open');
		openDropdown.forEach((item) => {
			item.classList.toggle('-open');
		});
	}
};

const closeDropdown = (evt) => {
	if (evt.target.closest('.nav__drop-group.-open')) {
		return;
	}
	removeOpen();
};

function throttle(fn, wait) {
	var time = Date.now();
	return function() {
		if ((time + wait - Date.now()) < 0) {
			fn();
			time = Date.now();
		}
	}
}

const onScrollDown = () => {
	let lastScrollTop = 20;
	const bodyClasses = document.body.classList;
	window.onscroll = function() {
		let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
		if (st > lastScrollTop){
			bodyClasses.remove('-scroll-up');
			bodyClasses.add('-scroll-down');
		} else if (st <= 20) {
			bodyClasses.remove('-scroll-up');
			bodyClasses.remove('-scroll-down');
		} else if (!st <= 20) {
			bodyClasses.remove('-scroll-down');
			bodyClasses.add('-scroll-up');
		}
		lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
	};
}

exports.onClientEntry = () => {
	window.onload = () => {
		document.addEventListener('click', closeDropdown, false);
		onScrollDown();
	};

};


// exports.onClientEntry = () => {
// 	if (typeof document !== 'undefined' && typeof window !== 'undefined') {

// 		// Create an intersection observer with default options, that
// 		// triggers a class on/off depending on an element’s visibility
// 		// in the viewport
// 		const animationObserver = new IntersectionObserver((entries, observer) => {
// 			for (const entry of entries) {
// 				entry.target.classList.toggle('build-in-animate', entry.isIntersecting)
// 			}
// 		});

// 		// Use that IntersectionObserver to observe the visibility
// 		// of some elements
// 		for (const element of document.querySelectorAll('.js-build-in')) {
// 			animationObserver.observe(element);
// 		}
// 		for (const element of document.querySelectorAll('.c-btn')) {
// 			animationObserver.observe(element);
// 		}
// 	}
// }