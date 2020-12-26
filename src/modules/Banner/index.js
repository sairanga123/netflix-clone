import "./Styles/index.scss";
import React, { useState, useEffect } from "react";
import axios from '../../axios.js';
import request from '../../requests.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../NavBar/index.js';
function Banner() {
    const [movie, setMovie] = useState([]);
    const [movieDesc, setMovieDesc] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const myRequest = await axios.get(request.fetchNetflixOriginals);
            setMovie(
                myRequest.data.results[
                Math.floor(Math.random() * myRequest.data.results.length)
                ]
            );
            return myRequest;
        }

        fetchData();
    }, []);

    console.log(movie);

    function truncate(str, n) {
        return str.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="Banner" style={{
            backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            //backgroundPosition: 'center'
        }}>
            <NavBar />
            <div className="Banner_contents">
                <div className="Banner_contents_movieTitle">{movie.name}</div>
                <div className="Banner_contents_movieDescription">{movie.overview ? truncate(movie.overview, 400) : ""}</div>
                <div className="Banner_contents_buttons">
                    <button className="Banner_contents_buttons_button"><FontAwesomeIcon icon={faPlay} id="icon_play" /> Play</button>
                    <button className="Banner_contents_buttons_button">My List</button>
                </div>
                <p className="Banner_contents_description"> </p>
            </div>
            <div className="Banner--fadeBottom"></div>
        </header>
    )
}

export default Banner;