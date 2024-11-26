import React from "react";
import { useState } from "react";
import { useEffect } from "react";



function MovieDBService() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('./movieDB.json')
            .then((response) => response.json())
            .then((movies) => setMovies(movies))
            .catch((error) => console.error('Error:', error));
    }, []);

    return(
        <div>
            <h1>Movie List</h1>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>{movie.movie}</li>
                ))}
            </ul>
            <script>console.log(movies);</script>
        </div>
    )
}

export default MovieDBService;
