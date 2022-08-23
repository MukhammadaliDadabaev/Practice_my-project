import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="brand">
        <span><i className="fa-solid fa-bars"></i></span>
        <i className="fa-brands fa-youtube"></i>
        <span>YouTube</span>
      </a>
      <div className="search_head">
        <input type="text" placeholder="Search..."/>
        <i className="fa-solid fa-keyboard"></i>
        <i className="fa-solid fa-magnifying-glass"></i>
        <span><i className="fa-solid fa-microphone"></i></span>
        <div className="icons">
          <a href="/">
            <i>5</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;