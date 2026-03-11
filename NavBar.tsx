import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <nav className="navBar">

      <h2>My Website</h2>

      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>

        <li>
          <Link to="/settings">Settings</Link>
        </li>

      </ul>

    </nav>
  );
}

export default NavBar;