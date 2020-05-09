import React from 'react';
import { useDivider } from '../hooks/use-divider';

const SectionDivider = (props) => {
  const dividerImg = useDivider();
  let dividerType = props.dividerType.toLowerCase().replace(/ /g, '');
  if (dividerType === 'blankspace') {
    return (
      <br />
    );
  } else {
    return (
      <div className="section-divider" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={dividerImg.file.url} alt="Page Divider"/>
      </div>
    );
  }

}

export default SectionDivider;