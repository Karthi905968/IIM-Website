import React from 'react';
import logo from '../assets/img/logo.webp'; // Make sure you have the logo image in the appropriate path
import search from '../assets/img/search-3-24.png'
function Header() {

  // Define menu items for other sections similarly

  return (
    <header className="header">
      <div className="header-main">
        <img src={logo} alt="IIT Bombay" className="header-logo" />
        <div className="header-title">
          <h1>भारतीय प्रबंधन संस्थान तिरुचिरापल्ली</h1>
          <h1>Indian Institute of Management Tiruchirappalli</h1>
        </div>
      </div>
      <div className='language-toggle'>
       <p><span>English</span> | <span>हिंदी</span></p>
       <div className='serach-bar'>
        <input type="text" placeholder='Search...' className='search-input'/>
        <span><img src={search} alt="Search" /></span>
      </div>
      </div>
     
    </header>
  );
}

export default Header;
