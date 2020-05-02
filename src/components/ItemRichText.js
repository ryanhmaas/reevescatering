import React from 'react';
import PropTypes from 'prop-types';

function ItemRichText ({markdown, justification, buttons}) {
  return (
    <div></div>
  )
}

ItemRichText.propTypes = {
  markdown: PropTypes.string,
  justification: PropTypes.string,
  buttons: PropTypes.object
};

export default ItemRichText