import React from "react";
import Movie from "./Movie";



//MovieList: a container for all the Movie components and their data.

export default class MovieList extends React.Component {
    render() {
        return (
            <div>
                <h1>Movie List</h1>
                <ul>
                <div className="card">
                    <div className="card-header bg-primary">
                    </div>
                    <div>

                        <ul>
                            {movies.map((movie, index) => ( //ERROR in [eslint] 'movies' is not defined
                                <li key={index}>{movie.movie}</li>
                            ))}
                        </ul>
                        <script>console.log(movies);</script>
                    </div>

                </div>
                </ul>
                
            </div>
        )
    }
}

