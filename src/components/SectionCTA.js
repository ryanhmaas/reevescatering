import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/pro-solid-svg-icons';
function SectionCTA(props) {
	const { data } = props;
	const { callToActionBorder, callToActionTitle, callToActionButton } = data;

	const formattedBorderName = callToActionBorder.toLowerCase();
	const { linkName, linkIcon, linkIconPlacement } = callToActionButton;

	const formattedLinkIconPlacement = linkIconPlacement.toLowerCase();
	console.log(linkIconPlacement);
	return (
		<div className={`section-cta -border-${formattedBorderName}`}>
			<div className="section-cta__title">{callToActionTitle}</div>
			<button className="section-cta__btn">
				{formattedLinkIconPlacement === 'left' && (
					<FontAwesomeIcon className="mr-1/2" icon={faPaperPlane} style={{ color: '#fff' }} />
				)}
				{linkName}
				{formattedLinkIconPlacement === 'right' && (
					<FontAwesomeIcon className="ml-1/2" icon={faPaperPlane} style={{ color: '#fff' }} />
				)}
			</button>
		</div>
	);
}

export default SectionCTA;
