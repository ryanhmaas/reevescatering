import React from 'react';
import PropTypes from 'prop-types';

function NavGroup ({name, slug, sections}) {
  return (
    <div></div>
  )
}

NavGroup.propTypes = {
  name: PropTypes.string,
  slug: PropTypes.string,
  sections: PropTypes.array
};

export default NavGroup