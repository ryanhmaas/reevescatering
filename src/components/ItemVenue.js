import React from 'react';
import Img from 'gatsby-image';

function ItemVenue(props) {
	const { venueDescription, venueName, venueImage, websiteLink } = props;
	return (
		<a className="tiles-grid__item"
			href={websiteLink}
			target="_blank"
			rel="noopener noreferrer"
	>
			<div className="tiles-container">
				{venueImage &&
				venueImage.fluid != null && (
					<div className="image-container">
						<Img 
							fluid={venueImage.fluid} 
							className="tiles-pic" 
							alt={venueName + '-pic'} 
						/>
						<div className="tiles-ds">
							<div>
								<b>{venueName}</b>
							</div>
							<div>{venueDescription}</div>
						</div>
					</div>
				)}
				<div className="tiles-details">
					<div>
						<b>{venueName}</b>
					</div>
				</div>
			</div>
		</a>
	);
}

export default ItemVenue;
