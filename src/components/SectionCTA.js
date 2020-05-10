import React from 'react';
import PropTypes from 'prop-types';

function SectionCTA(props) {
	const { callToActionBorder, callToActionTitle, callToActionButton } = props;
	return <div />;
}

SectionCTA.propTypes = {
	title: PropTypes.string,
	button: PropTypes.object,
	border: PropTypes.string
};

export default SectionCTA;
