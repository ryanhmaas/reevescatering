import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/pro-light-svg-icons';
import Img from "gatsby-image";
import '@fortawesome/fontawesome-svg-core/styles.css';

const navLinkParent = React.createRef();


const mobileMenuDrop = (evt) => {
	// Drop Menu Toggle
	let dropGroups = document.querySelectorAll('.nav__drop-group');
	dropGroups.forEach(group => {
		let subMenu = group.querySelector('.nav__drop-menu');
    let menuToggle = group.querySelector('.nav__drop-toggle');
    let menuToggleHeight = menuToggle.offsetHeight;
		let subMenuHeight = subMenu.offsetHeight;

		group.style.setProperty('--drop-closed-height', menuToggleHeight+'px');
		group.style.setProperty('--drop-open-height', (menuToggleHeight+subMenuHeight)+'px');
	});
}

function TopBar({ data, reevesLogo }) {

	return (
		<nav className="nav">
			<section className="nav__container u-container">
				<Link to="/" className="nav__brand" style={{ textDecoration: 'none' }}>
          <Img
              alt="Reeves Catering White Logo"
              title="Reeves Catering White Logo"
              fluid={reevesLogo.fluid}
              style={{ width: "100%", height: "100%" }}
            />
				</Link>

        <button className="nav__mobile-menu" style={{'--drop-closed-height': 42+'px'}} onClick={function(evt) {
          navLinkParent.current.classList.toggle('-open');
          evt.target.classList.toggle('-open');
          mobileMenuDrop();
        }}>
          <FontAwesomeIcon className="icon__svg" icon={faBars} />
        </button>
				{/* Main nav wrapper */}
				<ul className="nav__link-parent" ref={navLinkParent}>
          {data.map((group) => {
            if (group.groupType.toLowerCase() === "dropdown"){
              return (
                <>
                  <li className="nav__drop-group">
                    {/* dropdowns have a menu name and a angle down icon */}
                    <button
                      className="nav__drop-toggle"
                      onClick={function(evt) {
                        evt.target.parentElement.classList.toggle('-open');
                        mobileMenuDrop();
                      }}
                    >
                      {group.groupName} &nbsp;<FontAwesomeIcon className="icon__svg" icon={faAngleDown} />
                    </button>
                    <ul className="nav__drop-menu">
                      {group.navLinkRef.map((item) => {
                        return (
                          <>
                            <li className="nav__link-wrapper">
                              <Link to={`/${item.linkSourceInternal?.slug}`} className="nav__link">
                                {item.linkName}
                              </Link>
                            </li>
                          </>
                        )
                      })}
                    </ul>
                  </li>
                </>
              )
            }
            else{
              return group.navLinkRef.map(item => {
                const isInternal = item.linkSourceInternal != null;
                const isExternal = item.linkSourceExternal != null;
                const isDownload = !isInternal && !isExternal;

                return (
                  <>
                    <li className="nav__link-wrapper">
                      {isInternal && (
                        <Link
                          to={`/${item.linkSourceInternal?.slug}`}
                          className="nav__link"
                        >
                          {item.linkName}
                        </Link>
                      )}
                      {!isInternal && !isDownload && (
                        <a
                          className="nav__link"
                          href={item.linkSourceExternal}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.linkName}
                        </a>
                      )}
                      {isDownload && (
                        <a
                          className="nav__link"
                          target="_blank"
                          href={item.downloadFile?.file.url}
                          rel="noopener noreferrer"
                          download
                        >
                          {item.linkName}
                        </a>
                      )}
                    </li>
                  </>
                )
              })
            }
          })}
				</ul>
			</section>
		</nav>
	);
}


export default TopBar;
