import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
//import "./index.css";
//import name from "./name.png";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <h2>Stranger's Things</h2>
      <div className="logo"></div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Posts" className="nav-link">
            Posts
          </Link>
        </li>

        <li className="nav-item">
          <button type="button" className="contact-button">
            <Link to="/Signup" className="nav-link">
              Signup
            </Link>
          </button>
        </li>
        <li className="nav-item">
          <button type="button" className="contact-button">
            <Link to="/Login" className="nav-link">
              Login
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
