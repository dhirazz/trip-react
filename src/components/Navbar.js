import React from "react";
// import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "./data";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            {/* <img src={logo} className="nav-logo" alt="backroads" /> */}
            <h3 className="our-trip">
              Our <span className="Trip">Trip</span>
            </h3>
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">
            {pageLinks.map((links) => {
              return (
                <li key={links.id}>
                  <a href={links.href} className="nav-link">
                    {links.text}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((slink) => {
              return (
                <li key={slink.id}>
                  <a
                    href={slink.href}
                    rel="noreferrer"
                    target="_blank"
                    className="nav-icon"
                  >
                    <i className={slink.icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
