import React from 'react';
import ItemAward from '../components/ItemAward';
import ItemRichText from '../components/ItemRichText';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function SectionSlider({ data }) {
	//sectionType is the slider type - contentful will not rename it once pub'd :/
	// displaySliderName is also possible
	const { sliderItems, sliderName, sectionType } = data;
	const sliderItem = (props) => {
		if (sectionType === 'Award') {
			return <ItemAward {...props} />;
		} else {
			return <ItemRichText {...props} />;
		}
	};

	let slideSize = 60;

	return (
		<div className="c-slider__wrapper">
			<h3 className="c-slider__title" style={{ textAlign: 'center' }}>
				{sliderName}
			</h3>
			{sliderItems.length > 0 && (
				<Carousel className="c-slider -hide-mobile" infiniteLoop centerMode centerSlidePercentage={slideSize}>
					{sliderItems.map((item, index) => {
						return <div className="c-slider__content" key={`slider__content-${index}-desktop`}>{sliderItem(item)}</div>;
					})}
				</Carousel>
			)}

			{/* Dupe for mobile */}
			{sliderItems.length > 0 && (
				<Carousel className="c-slider -show-mobile" infiniteLoop centerMode centerSlidePercentage={100}>
					{sliderItems.map((item, index) => {
						return <div className="c-slider__content" key={`slider__content-${index}-mobile`}>{sliderItem(item)}</div>;
					})}
				</Carousel>
			)}
		</div>
	);
}

export default SectionSlider;
