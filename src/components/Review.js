import React from "react";
import Stars from "./Stars";

//Review: A text review a user can leave on a movie.

export default class Review extends React.Component {
    render() {
        const { review, stars } = this.props;
        return (
            <div className="card">
                <p>{review}</p>
                <Stars stars={stars}/>
            </div>
        )
    }
}