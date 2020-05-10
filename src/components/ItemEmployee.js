import React from 'react';
import PropTypes from 'prop-types';

function ItemEmployee(props) {
	const { employeeName, employeePicture, employeeRole, employeeBio } = props;
	return <div />;
}

ItemEmployee.propTypes = {
	name: PropTypes.string,
	profile: PropTypes.string,
	role: PropTypes.string,
	bio: PropTypes.object
};

export default ItemEmployee;
