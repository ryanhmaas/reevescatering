import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faRingsWedding,
	faHandshake,
	faBirthdayCake,
	faCalendarStar,
	faPaperPlane,
	faUtensilsAlt,
	faWineGlassAlt
} from '@fortawesome/pro-solid-svg-icons';

function ItemIcon(props) {
	const { displayIconName, faIcon, iconName } = props;

	const capitalize = (s) => {
		return s.toLowerCase().replace(/\b./g, function(a) {
			return a.toUpperCase();
		});
	};

	const formatFontAwesomeIconName = (iconName) => {
		let actualString = iconName.replace(/-/g, ' ');
		let capitalized = capitalize(actualString);
		return `fa${capitalized.replace(/\s/g, '')}`;
	};

	const getFaIcon = (s) => {
		let name = formatFontAwesomeIconName(s);
		switch (name) {
			case 'faRingsWedding': {
				return faRingsWedding;
			}
			case 'faHandshake': {
				return faHandshake;
			}
			case 'faBirthdayCake': {
				return faBirthdayCake;
			}
			case 'faCalendarStar': {
				return faCalendarStar;
			}
			case 'faPaperPlane': {
				return faPaperPlane;
			}
			case 'faUtensilsAlt': {
				return faUtensilsAlt;
			}
			case 'faWineGlassAlt': {
				return faWineGlassAlt;
			}
		}
	};

	let newIcon = faIcon ? faIcon : iconName;

	return (
		<>
			<FontAwesomeIcon icon={getFaIcon(newIcon)} />
		</>
	);
}

ItemIcon.propTypes = {
	name: PropTypes.string,
	displayName: PropTypes.bool,
	icon: PropTypes.string,
	link: PropTypes.object
};

export default ItemIcon;
