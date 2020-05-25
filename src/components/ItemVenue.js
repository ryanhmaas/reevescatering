import React from 'react';
import PropTypes from 'prop-types';

function ItemVenue(props) {
	const { venueDescription, venueName, venueImage } = props;
	return <div />;
}

ItemVenue.propTypes = {
	name: PropTypes.string,
	image: PropTypes.bool,
	desc: PropTypes.object
};

export default ItemVenue;
