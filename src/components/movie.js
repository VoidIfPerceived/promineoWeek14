import React from "react";
import Rating from "./rating";
import ReviewList from "./reviewList";


//Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewList: props.reviewList,
            rating: props.rating
        };
    }
    
    



    render() {
        let stars = [];





        return(
            <div>

            </div>
        )
    }
}