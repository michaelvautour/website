import React from "react";
import "./nav.css";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li className="li-nav lrg_scrn">
          <a href="index.html" className="li-a-nav li-a-hover">
            Home
          </a>
        </li>
        <li className="li-nav">
          <a href="#Portfolio" className="li-a-nav li-a-hover brdr-top">
            Portfolio
          </a>
        </li>
        <li className="li-nav">
          <a href="#Contact" className="li-a-nav li-a-hover brdr-top">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
