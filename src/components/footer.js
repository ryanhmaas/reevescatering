import React from "react"
import { Link } from "gatsby"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faEnvelope } from "@fortawesome/pro-solid-svg-icons"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = props => {
  const { data }  = props;
  const nav = data[0];

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
              864-275-0021
            </p>
            <p>
              <FontAwesomeIcon className="mr-1/2" icon={faEnvelope} />
              info@domain.com
            </p>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-header">{nav.groupName}</div>
          <div className="footer-section__navigation">
              {nav.navLinkRef.map((item) => {
                const isInternal = item.linkSourceInternal != null;
                const isExternal = item.linkSourceExternal != null;
                const isDownload = !isInternal && !isExternal;
                return (
                  <>
                    {isInternal && (
                      <Link
                        to={`/${item.linkSourceInternal?.slug}`}
                      >
                        {item.linkName}
                      </Link>
                    )}
                    {!isInternal && !isDownload && (
                      <a
                        href={item.linkSourceExternal}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.linkName}
                      </a>
                    )}
                    {isDownload && (
                      <a
                        target="_blank"
                        href={item.downloadFile?.file.url}
                        rel="noopener noreferrer"
                        download
                      >
                        {item.linkName}
                      </a>
                    )}
                  </>
                )
              })}
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-header">Social</div>
          <div className="footer-text social-links">
            <p className="social-item__container">
              <a
                href="https://www.instagram.com/reevescatering/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon className="mr-1/2" icon={faInstagram} />
                Instagram
              </a>
            </p>
            <p className="social-item__container">
              <a
                href="https://www.facebook.com/JustinReevesCatering/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon className="mr-1/2" icon={faFacebook} />
                Facebook
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
