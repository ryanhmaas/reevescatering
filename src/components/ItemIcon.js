import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faRingsWedding,
	faHandshake,
	faBirthdayCake,
	faCalendarStar,
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
			case 'faWineGlassAlt': {
				return faWineGlassAlt;
			}
		}
	};

	return (
		<div>
			<div>{faIcon}</div>
			<FontAwesomeIcon icon={getFaIcon(faIcon)} style={{ color: '#7AC142' }} />
			<p>{formatFontAwesomeIconName(faIcon)}</p>
		</div>
	);
}

ItemIcon.propTypes = {
	name: PropTypes.string,
	displayName: PropTypes.bool,
	icon: PropTypes.string,
	link: PropTypes.object
};

export default ItemIcon;
