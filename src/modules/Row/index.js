import React, { useState, useEffect } from "react";
import axios from "../../axios.js";
import requests from "../../requests.js";
import "../Row/Styles/index.scss";

const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  // functional component set state with hooks in react
  const [movies, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // we want everything like this to load right when the row loads itself
    // in our app for db tools, we used async function because we want that data to show up after

    // if [], run once when the row loads and dont run again
    // if we put [movies], it will run again whenever movies changes
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="Row">
      <h2>{title}</h2>

      <div className="Row_posters">
        {movies.map(movie => (
          <div className={`Row_posters_single-poster ${!isLargeRow && "Row_posters_single-posterSmall"}`}>
            <img
              key={movie.id}
              //className={`Row_posters_single-poster ${!isLargeRow && "Row_posters_single-posterSmall"}`}
              src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              //src={baseUrl + movie.poster_path}
              alt={movie.name}
            />
            <div class="overlay">
              <div class="text">{!isLargeRow ? movie.name : ""}</div>
              <div class="text">{!isLargeRow ? movie.original_title : ""}</div>
            </div>
          </div>
        ))}
      </div>

      {/* container -> posters */}
    </div>
  );
}

export default Row;
