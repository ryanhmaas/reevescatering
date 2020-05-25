import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

function ItemEmployee(props) {
	const { employeeName, employeePicture, employeeRole, employeeBio } = props;
	console.log(props);
	return (
		<div className="employee-grid__item">
			<div style={{ backgroundColor: 'rgba(223, 223, 223, 0.8)' }}>
				{employeePicture && employeePicture.fluid != null && <Img fluid={employeePicture.fluid} alt="test" />}
				<div>
					<b>{employeeName}</b>
				</div>
				<div>Job Description</div>
			</div>
		</div>
	);
}

export default ItemEmployee;
