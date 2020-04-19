import React from 'react';

const HyperionFooter = (props) => {
  return (
    <div className="hyperion--footer">
      <div className="hyperion--footer-reeves">&copy; Reeves Catering 2019</div>
      <div className="hyperion--detail">
        <img 
          alt="Hyperion Development Logo"
          className="hyperion--detail-logo" 
          title="Placeholder Image"
          src={props.logo.publicURL}
          />
        <div>Designed and Developed by <a className="hyperion--detail-sitelink" href="https://www.hyperiondevelopment.net" target="_blank" rel="noreferrer noopener">Hyperion Development LLC</a></div>
      </div>

    </div>
  )
}

export default HyperionFooter;