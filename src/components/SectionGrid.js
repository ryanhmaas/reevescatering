import React from 'react';
import ItemVenue from './ItemVenue';
import ItemIcon from './ItemIcon';
import ItemEmployee from './ItemEmployee';

function SectionGrid({ data }) {
	const { displayGridName, gridName, gridItems, gridType } = data;

	// todo - move switch checks to constants
	const gridItem = (props) => {
		if (gridType === 'VenueGrid') {
			return <ItemVenue {...props} />;
		} else if (gridType === 'EmployeeGrid') {
			return <ItemEmployee {...props} />;
		} else {
			return <ItemIcon {...props} />;
		}
	};

	const showGridItems = gridItems.length > 0;
	return (
		<section>
			{'grid name: ' + gridName}
			{'display grid:' + displayGridName}
			{'item length' + gridItems.length}
			{showGridItems && (
				<div>
					{gridItems.map((item) => {
						return <div>{gridItem(item)}</div>;
					})}
				</div>
			)}
		</section>
	);
}

export default SectionGrid;
