import React from 'react';
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleDown,
} from '@fortawesome/pro-light-svg-icons';

function closeDropdown(evt) {
  let openDropdown = document.querySelectorAll('.nav__drop-group.-open');

  if (evt.target.closest('.nav__drop-group.-open')) { return; } 
  removeOpen();
  
  function removeOpen() {
    openDropdown.forEach(item => {
      console.log('fired');
      
        item.classList.toggle('-open');
    });
  }
}

document.addEventListener('click', closeDropdown, false);

function TopBar () {

  return (
    <nav className="nav">
      <section className="nav__container u-container">
        <Link to="/" className="nav__brand" style={{textDecoration: 'none'}}>
          {/* TODO: Logo image to replace this */}
          <h4 style={{margin: 0, color: '#fff', boxSizing: 'border-box'}}>REEVES</h4>
        </Link>

        {/* Main nav wrapper */}
        <ul className="nav__link-parent">

          {/* Nav dropdown menu */}
          <li className="nav__drop-group">
            {/* dropdowns have a menu name and a angle down icon */}
            <button className="nav__drop-toggle" onClick={function(evt) {evt.target.parentElement.classList.toggle('-open')}}>Drop Down &nbsp;<FontAwesomeIcon className="icon__svg" icon={faAngleDown} /></button>
            {/* Main dropdown wrapper */}
            <ul className="nav__drop-menu">
              {/* Regular link structure inside */}
              <li className="nav__link-wrapper">
                <Link to='#' className="nav__link">Link 1</Link>
              </li>
              <li className="nav__link-wrapper">
                <Link to='#' className="nav__link">Looong Link 2</Link>
              </li>
              <li className="nav__link-wrapper">
                <Link to='#' className="nav__link">Link 3</Link>
              </li>
            </ul>
          </li>

          {/* Normal links */}
          <li className="nav__link-wrapper">
            <Link to='#' className="nav__link">Link 4</Link>
          </li>
          <li className="nav__link-wrapper">
            <Link to='#' className="nav__link">Link 5</Link>
          </li>
          <li className="nav__link-wrapper">
            <Link to='#' className="nav__link">Link 6</Link>
          </li>
        </ul>
      </section>
	  </nav>
  )
}

export default TopBar