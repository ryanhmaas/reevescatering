import React from 'react';
import PropTypes from 'prop-types';

function NavLink ({name, type, srcInternal, srcExternal, icon, iconLayout}) {
  return (
    <div></div>
  )
}

NavLink.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  srcInternal: PropTypes.object,
  srcExternal: PropTypes.string,
  icon: PropTypes.string,
  iconLayout: PropTypes.string
};

export default NavLink