import React from 'react';
import Img from 'gatsby-image';

function ItemVenue(props) {
	const { venueDescription, venueName, venueImage, websiteLink } = props;
	return (
		<div className="venue-grid__item">
			<div className="venue-container">
				{venueImage &&
				venueImage.fluid != null && (
					<div className="image-container">
						<Img fluid={venueImage.fluid} className="venue-pic" alt={venueName + '-pic'} />
						<div className="venue-details">
							<p className="venue-details__name">
								{websiteLink && (
									<a
										href={websiteLink}
										target="_blank"
										className="venue-details__link"
										rel="noopener noreferrer"
									>
										{venueName}
									</a>
								)}
								{!websiteLink && <span> {venueName}</span>}
							</p>
							<p className="venue-details__ds">{venueDescription}</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default ItemVenue;
