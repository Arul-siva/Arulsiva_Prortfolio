import React, { useRef ,useContext } from "react";
import { ThemeContext } from './pages/ThemeContext'
const Header = ({ scrollToSection }) => {

  return (
    <nav  className={`navbar navbar-expand-lg  shadow fixed-top mb-5 navbar-light bg-light `}>
      <div className="container">
        <a className="navbar-brand fs_18 fw-600" href="#!" >
          INBIO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3 fs_18 fw-600">
              <a className="nav-link" href="#!" onClick={() => scrollToSection("home")}>
                Home
              </a>
            </li>
            <li className="nav-item mx-3 fs_18 fw-600">
              <a className="nav-link" href="#!" onClick={() => scrollToSection("about")}>
                About
              </a>
            </li>
            <li className="nav-item mx-3 fs_18 fw-600">
              <a className="nav-link" href="#!" onClick={() => scrollToSection("education")}>
                Education
              </a>
            </li>
            <li className="nav-item mx-3 fs_18 fw-600">
              <a className="nav-link" href="#!" onClick={() => scrollToSection("projects")}>
                Project
              </a>
            </li>
            <li className="nav-item mx-3 fs_18 fw-600">
              <a className="nav-link" href="#!" onClick={() => scrollToSection("contact")}>
                Contact
              </a>
            </li>
            {/* <button
            className="btn btn-outline-secondary ms-3"
            onClick={toggleTheme}
          >
            {isDarkTheme ? "Light Mode" : "Dark Mode"}
          </button> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
