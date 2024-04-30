"use client"
import React, { useState } from "react";
import "../styling/navbar.css";

// Functional component for the Navbar
const Navbar = ({ onSearchActivate, isSearchActive }) => {
  // State to track active link in the navbar
  const [activeLink, setActiveLink] = useState("Home");

  // Function to handle search button click
  const handleSearchClick = () => {
    onSearchActivate(!isSearchActive);
  };

  // Function to handle link click
  const handleClick = (name) => {
    setActiveLink(name);
    // Close search bar if it's open when clicking on a link
    if (isSearchActive) onSearchActivate(false);
  };

  // Rendering the Navbar component
  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">PcariMovie</div>

        {/* Navbar links */}
        <div className="navbar-links">
          {["Home", "Movies", "TV Show", "Video", "FAQ", "Pricing", "Contact Us"].map((name) => (
            <a
              href={`/${name.toLowerCase().replace(/\s+/g, '-')}`}
              className={`nav-link ${activeLink === name ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault(); // Preventing default link behavior
                handleClick(name); // Handling click event
              }}
              key={name}
            >
              {name}
            </a>
          ))}
        </div>

        {/* Search button */}
        <div className="navbar-search">
          <button className="navbar-search-btn" type="button" onClick={handleSearchClick}>
            {/* Search icon */}
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M9 2C4.03 2 0 6.03 0 11s4.03 9 9 9c1.65 0 3.19-.56 4.42-1.5l.07-.06 7.91 7.91 1.41-1.41-7.9-7.91.05-.07A8.94 8.94 0 0018 11c0-4.97-4.03-9-9-9zm0 2a7 7 0 015 11.9A7 7 0 119 4z" />
            </svg>
          </button>
        </div>

        {/* User section */}
        <div className="navbar-user">
          <div className="user-avatar"></div>
          <div className="user-name">John Glich</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
