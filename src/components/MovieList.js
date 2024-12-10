import React from "react";
import Movie from "./Movie";
import ReviewList from "./ReviewList";
import MovieDBService from "./MovieDBService";



//MovieList: a container for all the Movie components and their data.

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    async componentDidMount() {
        try {
            const movies = await MovieDBService();
            this.setState({ movies });
        } catch (error) {
            console.error("Error fetching movies", error);
        }
    }

    addReview( review, stars ) {
        console.log(review, stars)
    }

    render() {
        this.addReview = this.addReview.bind(this);
        return (
            <div className="container">
                <h1>Movie List</h1>
                <ul>
                    <div className="card-header bg-primary">
                    </div>
                    <div>
                        {this.state.movies.map((movie, index) => (
                            <Movie
                                key={index}
                                {...movie}
                                movies={this.state.movies}
                                addReview={this.addReview}
                            />
                        ))}
                    </div>
                </ul>

            </div>
        )
    }
}

