import React from 'react';
import PropTypes from 'prop-types';

function ItemEmployee ({name, profile, role, bio}) {
  return (
    <div></div>
  )
}

ItemEmployee.propTypes = {
  name: PropTypes.string,
  profile: PropTypes.string,
  role: PropTypes.string,
  bio: PropTypes.object
};

export default ItemEmployee