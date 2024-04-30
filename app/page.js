"use client"
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewReleases from './components/NewReleases';
import Footer from './components/Footer';
import { SearchProvider } from './components/SearchContext'; 

export default function Home() {
    const [isSearchActive, setSearchActive] = useState(false);

    return (
        <SearchProvider>
            <>
                <Navbar onSearchActivate={setSearchActive} isSearchActive={isSearchActive} />
                <Hero isSearchActive={isSearchActive} onSearchActivate={setSearchActive} />
                <NewReleases />
                <Footer />
            </>
        </SearchProvider>
    );
}
