import React from "react";
import { useState } from "react";
import MovieDBService from "./MovieDBService";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import Review from "./Review";

let movies = MovieDBService();
//Movie: a component that represents movie data (i.e. image, synopsis, stars, etc…)

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {...props},
        };
    }



    addReview( reviewInput, starsInput ) {
        console.log(reviewInput, starsInput);

        console.log("this is what state reviews looks like before setstate: ", this.state.movie.reviews)
        let newReview =
            {
                review: reviewInput,
                stars: starsInput
            }

        this.setState(prevState => ({
            movie: {
                ...prevState.movie,
                reviews: [...this.state.movie.reviews, newReview]
            }
        }), () => {
            console.log(this.state.movie.reviews)
        })
    }

    render() {
        this.addReview = this.addReview.bind(this);
        return (
            <div className="container">
                <div className="container card" id={this.state.index}>
                    <div className="card-header row">
                        <h3>
                            {this.state.movie.title}
                        </h3>
                        <h5>
                            ({this.state.movie.year})
                        </h5>
                    </div>
                    <div className="container card-body row">
                        <div className="col-md-3">
                            <img src={this.state.movie.thumbnail} />
                        </div>
                        <div className="col-md-6">
                            {this.state.movie.synopsis}
                        </div>
                        <div className="col-md-3">
                            {this.state.movie.reviews.length > 0 ? <ReviewList reviews={this.state.movie.reviews} /> : null}
                        </div>
                    </div>
                    <div className="card-footer row">
                        <ReviewForm addReview={this.addReview} />
                    </div>
                </div>
            </div>
        )
    }
}

//So state and props is basically just updating the state which passes the new state as
//props to the state of the child which reads into a new state which is used to pass
//down to the next child as props which is passed through the child to another child
//as props for that child (makes so much sense)