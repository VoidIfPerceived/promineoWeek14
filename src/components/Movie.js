import React from "react";
import MovieDBService from "./MovieDBService";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

let movies = MovieDBService();
//Movie: a component that represents movie data (i.e. image, synopsis, stars, etc…)

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        };
    }

    addReview( review, stars ) {
        console.log(review, stars)
    }

    render() {
        this.addReview = this.addReview.bind(this);
        return (
            <div className="container">
                <div className="container card" id={this.state.index}>
                    <div className="card-header row">
                        <h3>
                            {this.props.title}
                        </h3>
                        <h5>
                            ({this.props.year})
                        </h5>
                    </div>
                    <div className="container card-body row">
                        <div className="col-md-3">
                            <img src={this.props.thumbnail} />
                        </div>
                        <div className="col-md-6">
                            {this.props.synopsis}
                        </div>
                        <div className="col-md-3">
                            {this.props.reviews.length > 0 ? <ReviewList reviews={this.props.reviews} /> : null}
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