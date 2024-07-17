import React, { useState } from 'react';
import '../assets/new.css';

function New() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container">
          <div className={`burger-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li className="nav-item dropdown">
              <a href="/about" className="nav-link">About</a>
              {/* <div className="dropdown-menu">
                <div className="dropdown-row">
                  <a href="/">Genesis</a>
                  <a href="/">Mission</a>
                  <a href="/">Vision</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Objectives</a>
                  <a href="/">Board Of Governors</a>
                  <a href="/">Director's Message</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Institute Colloquium</a>
                  <a href="/">Institution Eminence</a>
                  <a href="/">Gallery</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Campus Diary</a>
                </div>
              </div> */}
            </li>
            <li className="nav-item dropdown" id='programmes'>
              <a href="/" className="nav-link">Programmes &#9662;</a>
              <div className="dropdown-menu">
                <div className="dropdown-row">
                  <a href="/">PGPM (MBA)</a>
                  <a href="/">PGPM-HR (MBA-HR)</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Executive Ph.D (Executive Doctoral Programme)</a>
                  <a href="/">Ph.D (Doctoral Programme)</a>
                </div>
                <div className='dropdown-row'>
                <a href="/">PGPBM (Doctoral Programme)</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown" id='people'>
              <a href="/" className="nav-link">People &#9662;</a>
              <div className="dropdown-menu">
                <div className="dropdown-row">
                  <a href="/">Director</a>
                  <a href="/">Faculty</a>
                  <a href="/">Students</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Administration</a>
                  <a href="/">Alumni</a>
                  <a href="/">CVO</a>
                </div>
                <div className="dropdown-row">
                  <a href="iem">IEM</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="/" className="nav-link">Research & Industry &#9662;</a>
              <div className="dropdown-menu">
                <div className="dropdown-row">
                  <a href="/">Find An Expert</a>
                  <a href="/">Use Our Instruments</a>
                  <a href="/">Technology Transfer</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Entrepreneurship</a>
                  <a href="/">Research Park</a>
                  <a href="/">Executive Training</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Technology Innovation Hub</a>
                  <a href="/">Conferences at IIMT</a>
                  <a href="/">Working Papers</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown" id='placements'>
              <a href="/" className="nav-link">Placements &#9662;</a>
              <div className="dropdown-menu">
                <div className="dropdown-row">
                  <a href="/">Invites</a>
                  <a href="/">Brochure</a>
                  <a href="/">Top Recruiters</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Placement Reports</a>
                  <a href="/">Travel Info</a>
                  <a href="/">Contact Details</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="/" className="nav-link">Resources &#9662;</a>
              <div className="dropdown-menu">
                <div className="dropdown-row">
                  <a href="/">Media Relations</a>
                  <a href="/">Guest Lectures</a>
                  <a href="/">Press Releases</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">NIRF</a>
                  <a href="/">Consulting Activities</a>
                  <a href="/">Executive Education</a>
                </div>
                <div className="dropdown-row">
                  <a href="/">Partner Networks</a>
                  <a href="/">Students Exchange Programme</a>
                  <a href="/">Youth Delegation Program</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="/" className="nav-link">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default New;
