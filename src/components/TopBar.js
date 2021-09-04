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
			<section className="nav__container u-container -lg">
				<Link to="/" className="nav__brand" style={{ textDecoration: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.09 94.09" style={{width: '100%'}}><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" style={{fill: 'inherit'}} d="M13.32 73.41a7.08 7.08 0 00-3.62-1 6.85 6.85 0 00-.12 13.7 8.73 8.73 0 003.81-.85l.15 2.43a11 11 0 01-4 .63C4 88.34.32 84.77.32 79.21c0-5.4 3.92-9 9.26-9a9.74 9.74 0 013.94.76zM27.71 70.52h2.63L37.74 88H35l-1.78-4.42h-8.57L22.87 88h-2.64zm1.23 2.37l-3.49 8.67h7zM47.52 72.73h-5.44v-2.21h13.39v2.21H50V88h-2.48zM63.72 70.52h9.81v2.21h-7.31v5.12h6.65v2.21h-6.65v5.77h7.31V88h-9.81zM83 70.52h4.29c3.46 0 6.8.56 6.8 4.75a4.08 4.08 0 01-3.62 4 2.91 2.91 0 011.71 1.75l3.31 7h-2.86L90 82c-.78-1.71-1.61-1.71-2.94-1.71h-1.5V88H83zm2.51 7.53h2.13c2.38 0 3.79-1 3.79-2.73s-1.2-2.59-3.51-2.59h-2.41zM116.64 70.52h3.41l7.73 14.1v-14.1h2.51V88h-3.21l-7.93-14.4V88h-2.51zM153.69 73.64a8 8 0 00-4.82-1.21 6.85 6.85 0 00-.13 13.7 10.34 10.34 0 002.81-.3v-5.32h-3.68v-2.06h6.19v9.11a15.81 15.81 0 01-5.34.78c-5.54 0-9.23-3.57-9.23-9.13 0-5.4 3.91-9 9.25-9a13.27 13.27 0 015.15.88z"/><path d="M105.1 94.09a2.43 2.43 0 001.44-.83c.57-.69.17-2.38-.05-3.52s-.58-3.82-.74-5.63-.15-6.77-.11-7.9a2.22 2.22 0 01.42-1.54c.25-.54.94-.91 1.1-2.07a42.48 42.48 0 00-.4-6.46c-.23-2.62-.25-2.13-.25-1.76v7.13c0 .34-.54.27-.58 0s0-.51 0-1.91-.31-5.46-.38-5.44-.13 7-.14 7.39-.2.26-.26.26-.25 0-.26-.26-.11-7.36-.18-7.38-.23 4.07-.29 5.47-.06 1.6-.09 1.87-.53.35-.59 0 0-6.77 0-7.13 0-.86-.26 1.76a45.31 45.31 0 00-.4 6.46c.17 1.16.86 1.53 1.11 2.07a2.33 2.33 0 01.42 1.54c0 1.13 0 6.08-.11 7.9s-.53 4.48-.75 5.63-.61 2.83-.05 3.52a2.48 2.48 0 001.44.83z" style={{fill: "inherit"}}/><path className="cls-3" style={{fill: '#fff'}} d="M41.5 56.05a16.58 16.58 0 01-3-.26C38 49.41 38.13 37 38.34 30c.45 0 1-.05 1.62-.05 1.47 0 3.19.09 4.85.19 1.45.08 2.83.15 3.86.15h.56l-.61-5.27-.53.11a35.09 35.09 0 01-7.29.91 19.28 19.28 0 01-2.32-.14c-.35-5.53-.36-14-.15-18.94a85.36 85.36 0 0110.5 1l.74.13-1.22-5.3-16.16.26v.52c.76 14 .44 41.55-.64 55.64v.54h17.93l2.4-5.53-1 .3a35.44 35.44 0 01-9.38 1.53zM64.9 56.05a16.47 16.47 0 01-3-.26c-.46-6.36-.37-18.79-.16-25.79.45 0 1-.05 1.63-.05 1.47 0 3.18.09 4.84.19 1.46.08 2.83.15 3.87.15h.56L72 25.06l-.54.11a35.09 35.09 0 01-7.29.91 19 19 0 01-2.31-.14c-.36-5.52-.37-14-.16-18.94a76.17 76.17 0 0110.5 1l.74.13-1.22-5.3-16.12.22v.52c.75 14 .44 41.53-.64 55.64l-.05.54h17.97l2.41-5.53-1 .3a35.44 35.44 0 01-9.39 1.53zM147.54 26.58c-3.11-3.55-6.33-7.21-7-13.5A5.58 5.58 0 01142 8.6c2.25-2.51 6.42-3.45 8.52-3.45a5 5 0 01.83.06l.9.14L150 0l-.38.05c-.14 0-14 2.11-14.7 12.81-.53 7.75 3.93 13.43 7.86 18.45 3.28 4.19 6.11 7.8 5.69 11.83-.86 8.53-4.15 12.17-11 12.17A23.36 23.36 0 01134 55l-.69-.1.91 5.14h.37s.53.05 1.37.05c4.09 0 17.48-1.36 18.1-18.88.28-6.9-3.06-10.65-6.52-14.63zM118 56.05a16.47 16.47 0 01-3-.26c-.45-6.38-.36-18.84-.15-25.75.45 0 1-.05 1.63-.05 1.47 0 3.18.09 4.84.19 1.46.08 2.83.15 3.87.15h.56l-.61-5.27-.54.11a35.09 35.09 0 01-7.29.91 19 19 0 01-2.31-.14c-.36-5.53-.37-14-.16-18.94h.08a81 81 0 0110.42 1l.74.13-1.22-5.3-16.15.26v.52c.76 14 .44 41.51-.64 55.64v.54H126l2.41-5.53-1 .3a35.44 35.44 0 01-9.41 1.49zM108 3.64l.13-.6h-5.44l-.08.41c-1.67 9-6 27-9.49 38.89a371 371 0 01-11-39.14L82 2.8h-6.78l.15.62C78.71 16.93 88 44.29 93 59l.61 1.83.48-1.4C98.75 45.4 105 17.76 108 3.64zM18.39 38.28c-.93-1.94-1.75-3.67-2.39-5 6.15-5.88 8.31-13.72 5.64-20.54-2.55-6.5-8.93-10.37-17.08-10.37a30.85 30.85 0 00-4.11.3L0 2.74v.45c.78 15.92 1.14 43.26.75 56.28v.51h6.34v-.51c0-2.82-.12-5.8-.18-8.88-.33-15.68-.71-33.42 0-43.88 8.62 1.06 9.28 9.4 9.27 12 0 7-3.76 13.46-8 13.8l-.84.07.46.7a152.32 152.32 0 0112.79 26.4l.12.33H21l6.57-.24h.72l-.24-.77c-2.05-4.88-6.47-14-9.66-20.72z"/></g></g></svg>
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
                      {group.navLinkRef.map((item, index) => {
                        return (
                          <React.Fragment key={`nav__drop-menu-${index}`}>
                            <li className="nav__link-wrapper">
                              <Link to={`/${item.linkSourceInternal?.slug}`} className="nav__link">
                                {item.linkName}
                              </Link>
                            </li>
                          </React.Fragment>
                        )
                      })}
                    </ul>
                  </li>
                </>
              )
            }
            else{
              return group.navLinkRef.map((item, index) => {
                const isInternal = item.linkSourceInternal != null;
                const isExternal = item.linkSourceExternal != null;
                const isDownload = !isInternal && !isExternal;

                return (
                  <React.Fragment key={`nav__link-wrapper-${index}`}>
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
                  </React.Fragment>
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
