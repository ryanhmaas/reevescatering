import React from 'react';

function SectionList(props) {
	const { data } = props;
	const { displayTitle, title, listItems } = data;
	return (
		<div className="c-list">
			{displayTitle && <h3 className="c-list__title">{title}</h3>}
			<div className="c-list__container">
				{listItems.map((item) => {
					return (
						<div key={item.venueName} className="c-list__item">
							<div className="c-list__title">
								{item.websiteLink && (
									<a href={item.websiteLink} target="_blank" rel="noopener noreferrer">
										{item.venueName}
									</a>
								)}
								{!item.websiteLink && <span>{item.venueName}</span>}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default SectionList;
