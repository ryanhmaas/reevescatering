import React from 'react';
import PropTypes from 'prop-types';

function NavGroup ({name, type, navLinks}) {
  return (
    <div></div>
  )
}

NavGroup.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  navLinks: PropTypes.array
};

export default NavGroup