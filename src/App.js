import React from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import { useState } from "react";

const API_URL = "http://www.omdbapi.com/?apikey=19581ad9";



const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState(['']);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s='${title}'`);
    const data = await response.json();

    setmovies(data.Search);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

 

  return (
    <div className="app">
      <h1><a href='./app.js '>MovieLand</a></h1>

      <div className="search">
        <input value={searchTerm} 
        onChange={(term) => {setsearchTerm(term.target.value)}}
        onKeyDown={handleKeyDown}
        placeholder="Search any movie" />

        <img src={SearchIcon} alt="Search-Icon" 
        onClick={() => searchMovies(searchTerm)} />
      </div>
      

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Sory no movies here :| Try different keywords</h2>
        </div>
      )}
    </div>
  );
};

export default App;
