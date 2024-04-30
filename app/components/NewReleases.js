"use client"
import '../styling/newreleases.css';
import React, { useState, useEffect } from 'react';
import { useSearch } from './SearchContext';
import MovieCard from './MovieCard';

// Functional component for displaying new movie releases
const NewReleases = () => {
    // Using custom hook from SearchContext to get search term
    const { searchTerm } = useSearch();
    // State to store movies data and error
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    // Fetch movies data based on search term or default new releases
    useEffect(() => {
        if (searchTerm) {
            fetchFilteredMovies(searchTerm);
        } else {
            fetchMoviesAndDetails();
        }
    }, [searchTerm]);

    // Fetch new releases and their details
    const fetchMoviesAndDetails = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`);
            const data = await response.json();
            const moviesList = data.results;

            const detailedMovies = await Promise.all(moviesList.map(async (movie) => {
                const movieDetailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);
                const movieDetails = await movieDetailsResponse.json();
                return {
                    ...movie,
                    runtime: movieDetails.runtime,
                    genres: movieDetails.genres.map(genre => genre.name).join(', ')
                };
            }));

            setMovies(detailedMovies);
        } catch (error) {
            console.error('Failed to fetch movies:', error);
            setError(error.message);
        }
    };

    // Fetch filtered movies based on search term
    const fetchFilteredMovies = async (searchTerm) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchTerm)}&api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);
            const data = await response.json();

            const detailedMovies = await Promise.all(data.results.map(async (movie) => {
                const movieDetailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);
                const movieDetails = await movieDetailsResponse.json();
                return {
                    ...movie,
                    runtime: movieDetails.runtime,
                    genres: movieDetails.genres.map(genre => genre.name).join(', ')
                };
            }));

            setMovies(detailedMovies);
        } catch (error) {
            console.error('Failed to fetch filtered movies:', error);
            setError(error.message);
        }
    };

    // Rendering the NewReleases component
    return (
        <div className="new-releases">
            {/* Header */}
            <div className="header">
                <h2>{searchTerm ? 'Search Results' : 'New Releases'}</h2>
                <button className="view-more">View More</button>
            </div>
            {/* Movie grid */}
            <div className="movie-grid">
                {/* Mapping through movies data to display movie cards */}
                {movies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        views={movie.popularity}
                        duration={movie.runtime}
                        genre={movie.genres}
                    />
                ))}
                {/* Displaying error if any */}
                {error && <div>Error: {error}</div>}
            </div>
        </div>
    );
};

export default NewReleases;
