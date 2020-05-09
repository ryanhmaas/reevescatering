import React from 'react';
import PropTypes from 'prop-types';

function ItemVenue ({name, image, desc}) {
  return (
    <div></div>
  )
}

ItemVenue.propTypes = {
  name: PropTypes.string,
  image: PropTypes.bool,
  desc: PropTypes.object
};

export default ItemVenue