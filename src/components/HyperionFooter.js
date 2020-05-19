import React from 'react';

const HyperionFooter = (props) => {
	return (
		<div className="hyperion__footer">
			<div className="hyperion__footer-reeves">&copy; Reeves Catering 2019</div>
			<div className="hyperion__detail">
				<img
					alt="Hyperion Development Logo"
					className="hyperion__detail-logo"
					title="Placeholder Image"
					src={props.logo.publicURL}
				/>
				<div>
					Designed and Developed by{' '}
					<a
						className="hyperion__detail-sitelink"
						href="https://www.hyperiondevelopment.net"
						target="_blank"
						rel="noreferrer noopener"
					>
						Hyperion Development LLC
					</a>
				</div>
			</div>
		</div>
	);
};

export default HyperionFooter;
