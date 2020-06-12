import React from 'react';

function SectionList(props) {
	const { data } = props;
	const { displayTitle, title, listItems } = data;
	return (
		<div className="c-list">
			{displayTitle && <h3 className="c-list__title">{title}</h3>}
			<div class="c-list__container">
				{listItems.map((item) => {
					return (
						<div class="c-list__title">
							{item.websiteLink && (
								<a href={item.websiteLink} target="_blank">
									{item.venueName}
								</a>
							)}
							{!item.websiteLink && <span>{item.venueName}</span>}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default SectionList;
