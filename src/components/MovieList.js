import React from "react";
import Movie from "./Movie";
import ReviewList from "./ReviewList";



//MovieList: a container for all the Movie components and their data.

export default class MovieList extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Movie List</h1>
                <ul>
                    <div className="card-header bg-primary">
                    </div>
                    <div>
                        <ul>
                            {this.state.movies.map((movie, index) => (
                                <li key={index}>
                                    <Movie {...movie} />
                                </li>
                            ))}

                        </ul>
                    </div>
                </ul>
                
            </div>
        )
    }
}

