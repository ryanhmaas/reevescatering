import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/pro-solid-svg-icons';
import { Link } from 'gatsby';
function SectionCTA(props) {
	const { data } = props;
	console.log(data);
	const { callToActionBorder, callToActionTitle, callToActionButton } = data;

	const formattedBorderName = callToActionBorder.toLowerCase();
	const { linkName, linkIconPlacement, linkSourceExternal, linkSourceInternal, linkStyle } = callToActionButton;

	const formattedLinkIconPlacement = linkIconPlacement.toLowerCase();

	let buttonClass = '';
	if (linkStyle) {
		buttonClass = 'c-btn -' + linkStyle;
	} else {
		buttonClass = 'c-btn';
	}
	return (
		<div className={`section-cta -border-${formattedBorderName}`}>
			<div className="section-cta__title">{callToActionTitle}</div>
			{linkSourceInternal && (
				<Link className={buttonClass} to={linkSourceInternal ? linkSourceInternal.slug : ''}>
					{formattedLinkIconPlacement === 'left' && (
						<FontAwesomeIcon className="mr-1/2" icon={faPaperPlane} style={{ color: '#fff' }} />
					)}
					{linkName}
					{formattedLinkIconPlacement === 'right' && (
						<FontAwesomeIcon className="ml-1/2" icon={faPaperPlane} style={{ color: '#fff' }} />
					)}
				</Link>
			)}
			{linkSourceExternal && (
				<a
					className={buttonClass}
					href={linkSourceExternal ? linkSourceExternal : ''}
					target="_blank"
					name={linkName}
					rel="noopener noreferrer"
				>
					{formattedLinkIconPlacement === 'left' && (
						<FontAwesomeIcon className="mr-1/2" icon={faPaperPlane} style={{ color: '#fff' }} />
					)}
					{linkName}
					{formattedLinkIconPlacement === 'right' && (
						<FontAwesomeIcon className="ml-1/2" icon={faPaperPlane} style={{ color: '#fff' }} />
					)}
				</a>
			)}
		</div>
	);
}

export default SectionCTA;
