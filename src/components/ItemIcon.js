import React from 'react';
import PropTypes from 'prop-types';

function ItemIcon(props) {
	const { displayIconName, faIcon, iconName } = props;
	return (
		<div>
			{'displayIconName: ' + displayIconName}
			{'faIcon: ' + faIcon}
			{'iconName: ' + iconName}
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
