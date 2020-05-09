import React from 'react';
import { useDivider } from '../hooks/use-divider';

const SectionDivider = (props) => {
  const divider = useDivider();
  console.log(divider);
  let dividerType = props.dividerType.toLowerCase().replace(/ /g, '');
  if (dividerType === 'blankspace'){
    return(
      <br/>
    );
  }

export const SectionDivider = () => {
  return(
    <div className="components--divider" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <img src={divider.file.url} />
    </div>
  );
}

export default SectionDivider;