import React from "react";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <a className="navbar-brand text-white">FiDMa Co.</a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link text-white">
            Home 
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link text-white">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link text-white">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/news" className="nav-link text-white">
            News
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
