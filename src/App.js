import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

import './App.css';
import searchIcon from './search.svg';
// 14f6b16d

const API_URL = "http://www.omdbapi.com?apikey=14f6b16d";

const movie1 = {
    "Title": "LEGO Marvel Super Heroes: Black Panther - Trouble in Wakanda",
    "Year": "2018",
    "imdbID": "tt8205250",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY0YzQ0ZmUtYzk2YS00NGYyLWI4N2EtMWVlYjE1NmQ3Mjg5XkEyXkFqcGdeQXVyMDQzODc1OA@@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);

    };

    useEffect(() => {
        searchMovies('Wakanda');

    },[]);
    return (
        <div className='app'>
            <h1>Movie Haven</h1>

            <div className='search'>
                <input
                placeholder='search for a movie'
                value= {searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                src='{searchIcon}'
                alt='search'
                onClick={() => searchMovies(searchTerm)}
                />


            </div>

            {movies?.length > 0
              ? (
                <div className='container'>
                  {movies.map((movie) => (
                    <MovieCard movie={movie}/>
                  ))}
                </div>
              ) : (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
              )}

        </div>
    );
}

export default App;