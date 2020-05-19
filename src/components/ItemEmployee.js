import React from 'react';
import PropTypes from 'prop-types';

function ItemEmployee(props) {
	const { employeeName, employeePicture, employeeRole, employeeBio } = props;
	return (
		<div className="employee-grid__item">
			<div style={{ backgroundColor: 'rgba(223, 223, 223, 0.8)' }}>
				<div>
					<b>{employeeName}</b>
				</div>
				<div>Job Description</div>
			</div>
		</div>
	);
}

ItemEmployee.propTypes = {
	name: PropTypes.string,
	profile: PropTypes.string,
	role: PropTypes.string,
	bio: PropTypes.object
};

export default ItemEmployee;
