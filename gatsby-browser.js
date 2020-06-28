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

exports.onClientEntry = () => {
	window.onload = () => {
		document.addEventListener('click', closeDropdown, false);
	};
};
