"use client"
import React, { useState } from "react";  
import "../styling/hero.css";
import { useSearch } from "./SearchContext";

// Functional component for the Hero section
const Hero = ({ isSearchActive, onSearchActivate }) => {
    // Using custom hook from SearchContext to manage search functionality
    const { setSearchTerm } = useSearch();
    // State to manage local search term
    const [localSearchTerm, setLocalSearchTerm] = useState("");

    // Function to handle search button click
    const handleSearchClick = () => {
        setSearchTerm(localSearchTerm);
    };

    // Rendering the Hero component
    return (
        <div className="hero-section">
            {/* Play button container */}
            <div className="play-button-container">
                <div className="play-button">
                    <div className="outer-circle">
                        <div className="inner-circle">
                            {/* Play icon */}
                            <svg viewBox="0 0 24 24" className="play-icon">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero content container */}
            <div className="hero-content-container">
                {isSearchActive ? (
                    // If search is active, display search container
                    <div className="search-container"> 
                        <h1>Search your movies here!</h1>
                        {/* Input field for search */}
                        <input
                            type="text"
                            placeholder="Search by theatre..."
                            value={localSearchTerm}
                            onChange={(e) => setLocalSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        {/* Button to trigger search */}
                        <button onClick={handleSearchClick} className="search-btn">Search</button>
                    </div>
                ) : (
                    // If search is not active, display hero content
                    <div className="hero-content">
                        <h1>Search your movies here!</h1>
                        <p>Find your favorite movies and TV shows on PcariMovie.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;
