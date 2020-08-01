import React from "react"
import { Link } from "gatsby"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faEnvelope } from "@fortawesome/pro-solid-svg-icons"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = props => {
  const { data, socialLinks, contactInfoData } = props
  const nav = data[0]

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
            <p>
              Reeves Catering <br />
              40 Rushmore Drive <br />
              Greenville, SC 29615 <br />
            </p>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-header">Contact</div>
          <div className="footer-text">
            {contactInfoData.map(contactInfoItem => {
              let icon = contactInfoItem.type === "Phone" ? faPhone : faEnvelope
              let href =
                contactInfoItem.type === "Phone"
                  ? `tel:${contactInfoItem.value}`
                  : `email:${contactInfoItem.value}`
              return (
                <a href={href} rel="noopener noreferrer">
                  <FontAwesomeIcon className="mr-1/2" icon={icon} />
                  {contactInfoItem.value}
                </a>
              )
            })}
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-header">{nav.groupName}</div>
          <div className="footer-section__navigation">
            {nav.navLinkRef.map(item => {
              const isInternal = item.linkSourceInternal != null
              const isExternal = item.linkSourceExternal != null
              const isDownload = !isInternal && !isExternal
              return (
                <>
                  {isInternal && (
                    <Link to={`/${item.linkSourceInternal?.slug}`}>
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
            {socialLinks.map(link => {
              let icon = link.type === "Facebook" ? faFacebook : faInstagram
              return (
                <a href={link.url} rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className="mr-1/2" icon={icon} />
                  {link.type}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
