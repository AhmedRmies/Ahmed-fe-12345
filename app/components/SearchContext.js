"use client"
import React, { createContext, useContext, useState } from 'react';

// Creating a context for search functionality
const SearchContext = createContext();

// Custom hook to consume search context
export function useSearch() {
    return useContext(SearchContext);
}

// Provider component for managing search context
export const SearchProvider = ({ children }) => {
    // State to store search term
    const [searchTerm, setSearchTerm] = useState('');

    // Value object to be provided by the context
    const value = {
        searchTerm,
        setSearchTerm,
    };

    // Rendering the provider with children components
    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
};
