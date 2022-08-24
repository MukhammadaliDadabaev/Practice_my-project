import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-lfet">
        <a href="/" className="brand">
          <span>
            <i className="fa-solid fa-bars mr-3"></i>
          </span>
          <i className="fa-brands fa-youtube"></i>
          <span>YouTube</span>
        </a>
      </div>
      <div className="input-group  input-group-lg mt-2 w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Введите запрос"
        />
        <div className="input-group-append" id="button-addon4">
          <button className="btn border" type="button">
            <i className="fa-solid fa-keyboard"></i>
          </button>
          <button className="btn btn-light border" type="button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <span className="micfill">
          <i className="bi bi-mic-fill mt-3"></i>
        </span>
      </div>
      <div className="icons-right">
        <a href="/">
          <i class="bi bi-camera-video mr-3"></i>
          <i className="fas fa-bell mr-3"></i>
          <i className="fab fa-adn"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
