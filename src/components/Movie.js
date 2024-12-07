import React from "react";
import MovieDBService from "./MovieDBService";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

let movies = MovieDBService();
//Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        };
    }


    render() {
        const { title, year, thumbnail, synopsis, reviews } = this.state.movie;
        return (
            <div className="container">
                {movies.map((movie, index) => (
                    <div className="container card" key={index}>
                        <div className="card-header row">
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
                            <div className="col-md-6">
                                {movie.synopsis}
                            </div>
                            <div className="col-md-3">
                                {movie.reviews.length > 0 ? <ReviewList reviews={movie.reviews}/> : null}
                            </div> 
                        </div>
                        <div className="card-footer row">
                            <ReviewForm/>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}