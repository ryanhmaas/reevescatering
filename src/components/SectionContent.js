import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image-es5'

function SectionContent ({layout, richText, image}) {
  let layoutData = layout.toLowerCase();
  let richTextData = richText;
  let imageData = image;

  return (
    <section class="c-content">
      <BackgroundImage
        style={{display: "block", height: "100px", width: "100px"}}
				Tag="figure"
				className="hero__bg-img flex flex-col items-center justify-center h-full w-full bg-fixed bg-no-repeat"
				fluid={imageData}
			></BackgroundImage>
      {layoutData}
      {richTextData}
    </section>
  )
}

SectionContent.propTypes = {
  name: PropTypes.string,
  layout: PropTypes.string,
  richText: PropTypes.object,
  image: PropTypes.string
};

export default SectionContent