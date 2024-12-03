import React from "react";
import MovieDBService from "./MovieDBService";


let movies = MovieDBService();
//Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            reviewList: props.reviewList,
            rating: props.rating
        };
    }


    render() {
        return (
            <div className="container">
                {movies.map((movie, index) => (
                    <div className="card" key={index}>
                        <div className="card-header">
                            <h3>
                                {movie.title}
                            </h3>
                            <h5>
                                ({movie.year})
                            </h5>
                        </div>
                        <div className="container card-body row">
                            <div className="col-md-3">
                                <img src={movie.thumbnail}/>
                            </div>
                            <div className="col-md-9">
                                {movie.synopsis}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}