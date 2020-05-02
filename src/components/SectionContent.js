import React from 'react';
import PropTypes from 'prop-types';

function SectionContent ({name, layout, richText, image}) {
  return (
    <div></div>
  )
}

SectionContent.propTypes = {
  name: PropTypes.string,
  layout: PropTypes.string,
  richText: PropTypes.object,
  image: PropTypes.string
};

export default SectionContent