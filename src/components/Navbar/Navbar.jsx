import React from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar sticky-top bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-4">
          Ricky & Morty <span style={{ color: "blue" }}>wiki</span>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars open text-dark"></span>
          <span className="fas fa-times close text-dark"></span>
        </button>
        <ul className="nav nav-underline fs-4 justify-content-end">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" aria-current="page">
              Characters
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/episodes" className="nav-link">
              Episode
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/location" className="nav-link">
              Location
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
