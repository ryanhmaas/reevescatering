import React from "react";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/pro-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer--logo">
        <div className="footer-section--logo">
          <img 
              alt="Reeves Catering White Logo"
              title="Reeves Catering White Logo"
              src={props.reevesLogo.file.url}
            />
        </div>
      </div>
      <div className="footer--nav">
        <div className="footer-section">
          <div className="footer-header">
            Address
          </div>
          <div className="footer-text">
            <p>Reeves Catering</p>
            <p>40 Rushmore Drive</p>
            <p>Greenville, SC 29615</p>
            <p>Mon - Sun 9AM - 5PM</p>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-header">
            Contact
          </div>
          <div className="footer-text">
            <p><FontAwesomeIcon className="mr-half" icon={faPhone}></FontAwesomeIcon>+0800-123-4567</p>
            <p><FontAwesomeIcon className="mr-half" icon={faEnvelope}></FontAwesomeIcon>info@domain.com</p>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-header">
            Navigation
          </div>
          <div className="footer-section--navigation">
            <div className="footer-text navigation--left">
              <p>Home</p>
              <p>Portfolio</p>
              <p>Reviews</p>
              <p>Contact</p>
            </div>
            <div className="footer-text">
              <p>Our Story</p>
              <p>Staff</p>
              <p>Press</p>
              <p>Vendors</p>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-header">
            Social
          </div>
          <div className="footer-text">
            <p className="social-item--container">
              <FontAwesomeIcon className="mr-half" icon={faInstagram}></FontAwesomeIcon>Instagram
            </p>
            <p className="social-item--container">
              <FontAwesomeIcon className="mr-half" icon={faFacebook}></FontAwesomeIcon>Facebook
            </p>
            <p className="social-item--container">
              <FontAwesomeIcon className="mr-half" icon={faTwitter}></FontAwesomeIcon>Twitter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;