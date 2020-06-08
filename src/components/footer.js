import React from "react"
import { Link } from "gatsby"
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faPhone, faEnvelope } from "@fortawesome/pro-solid-svg-icons"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = props => {
  console.log(props)
  return (
    <div className="footer">
      <div className="footer__logo">
        <div className="footer-section__logo">
          <Img
            alt="Reeves Catering White Logo"
            title="Reeves Catering White Logo"
            fluid={props.reevesLogo.fluid}
            style={{ width: "150px" }}
          />
        </div>
      </div>
      <div className="footer__nav">
        <div className="footer-section">
          <div className="footer-header">Address</div>
          <div className="footer-text">
            <p>Reeves Catering</p>
            <p>40 Rushmore Drive</p>
            <p>Greenville, SC 29615</p>
            <p>Mon - Sun 9AM - 5PM</p>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-header">Contact</div>
          <div className="footer-text">
            <p>
              <FontAwesomeIcon className="mr-1/2" icon={faPhone} />
              +0800-123-4567
            </p>
            <p>
              <FontAwesomeIcon className="mr-1/2" icon={faEnvelope} />
              info@domain.com
            </p>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-header">Navigation</div>
          <div className="footer-section__navigation">
            <div className="footer-text navigation__left">
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/">Portfolio</Link>
              </p>
              <p>
                <Link to="/">Reviews</Link>
              </p>
              <p>
                <Link to="/">Contact</Link>
              </p>
            </div>
            <div className="footer-text">
              <p>
                <Link to="/our-story">Our Story</Link>
              </p>
              <p>
                <Link to="/meet-the-team">Staff</Link>
              </p>
              <p>
                <Link to="/">Press</Link>
              </p>
              <p>
                <Link to="/">Vendors</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-header">Social</div>
          <div className="footer-text social-links">
            <p className="social-item__container">
              <FontAwesomeIcon className="mr-1/2" icon={faInstagram} />
              Instagram
            </p>
            <p className="social-item__container">
              <FontAwesomeIcon className="mr-1/2" icon={faFacebook} />
              Facebook
            </p>
            <p className="social-item__container">
              <FontAwesomeIcon className="mr-1/2" icon={faTwitter} />
              Twitter
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
