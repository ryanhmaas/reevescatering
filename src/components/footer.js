import React from "react";

const Footer = (props) => {
  //add
  return (
    <div className="footer">
      <div className="footer-section">
        <img 
            alt="Reeves Catering White Logo"
            title="Reeves Catering White Logo"
            src={props.reevesLogo.publicURL}
          />
      </div>
      <div className="footer-section">
        <div className="footer-header">
          Address
        </div>
        <div className="footer-text">
          blah blah blah
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-header">
          Contact
        </div>
        <div className="footer-text">
          blah blah blah
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-header">
          Navigation
        </div>
        <div className="footer-text--container">
          <div>
            LEFT COL
          </div>
          <div>
            RIGHT COL
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-header">
          Social
        </div>
        <div className="footer-text">
          blah blah blah
        </div>
      </div>
    </div>
  );
}

export default Footer;