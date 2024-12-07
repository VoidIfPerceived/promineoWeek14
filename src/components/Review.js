import React from "react";

//Review: A text review a user can leave on a movie.

export default class Review extends React.Component {
    render() {
        const { review, rating } = this.props;
        return (
            <div className="card">
                <p>{review}</p>
                <h4>{rating}</h4>
            </div>
        )
    }
}