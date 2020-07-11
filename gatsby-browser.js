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

const mobileMenuDrop = (evt) => {
	// Drop Menu Toggle
	let dropGroups = document.querySelectorAll('.nav__drop-group');
	dropGroups.forEach(group => {
		let subMenu = group.querySelector('.nav__drop-menu');
		let menuToggle = group.querySelector('.nav__drop-toggle');
		let menuToggleHeight = menuToggle.offsetHeight;
		let subMenuHeight = subMenu.offsetHeight;

		group.style.setProperty('--drop-closed-height', menuToggleHeight+'px');
		group.style.setProperty('--drop-open-height', (menuToggleHeight+subMenuHeight)+'px');
	});
}


exports.onClientEntry = () => {
	window.onload = () => {
		document.addEventListener('click', closeDropdown, false);
	};
};

exports.onInitialClientRender = () => {
	mobileMenuDrop();
}

