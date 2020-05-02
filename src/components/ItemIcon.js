import React from 'react';
import PropTypes from 'prop-types';

function ItemIcon ({name, displayName, icon, link}) {
  return (
    <div></div>
  )
}

ItemIcon.propTypes = {
  name: PropTypes.string,
  displayName: PropTypes.bool,
  icon: PropTypes.string,
  link: PropTypes.object
};

export default ItemIcon