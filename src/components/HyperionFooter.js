import React from 'react';

const HyperionFooter = (props) => {
	return (
		<div className="hyperion__footer">
			<div className="hyperion__footer-reeves">&copy; Reeves Catering 2019</div>
			<a
				className="hyperion__detail hyperion__detail-sitelink"
				href="https://www.hyperiondevelopment.net"
				target="_blank"
				rel="noreferrer noopener"
			>
				<img
					alt="Hyperion Development Logo"
					className="hyperion__detail-logo"
					title="Placeholder Image"
					src={props.logo.publicURL}
				/>
				<div>Designed and Developed by Hyperion Development LLC</div>
			</a>
		</div>
	);
};

export default HyperionFooter;
