import React from "react";
import { useState } from "react";
import Movie from "./Movie";

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { //init state of ReviewForm
            review: "",
            stars: {}
        }
    }

    inputChangeHandler = (submit) => {   //passed every time an input is changed on screen
        const{ id, value } = submit.target;   //Now is when I realized that I should've committed again when things were still working
        this.setState({ [id]: value });
    }

    submissionHandler = (reviewData) => {
        reviewData.preventDefault();   //Oh My lord I got it to stop refreshing every time i submitted
            //Oh and also this fixed the bug where when I loaded the page it would call the function for every form it created
        this.props.addReview(this.state.review, this.state.stars);
        console.log("handled");
        this.setState({ review: "", stars: {} });
    }

    render() {
        return ( // React forces functions to be VVV PASSED {function} not Called {function()}
            <form onSubmit={this.submissionHandler}>
                <div className="form-group">
                    <div className="container">
                        <div className="row">
                            <label htmlFor="review">Review</label>
                            <textarea
                                type="text"
                                id="review"
                                className="form-control"
                                rows="3"
                                placeholder="Review"
                                value={this.state.review}
                                onChange={this.inputChangeHandler}
                            ></textarea>
                            <label htmlFor="stars">Stars</label>
                            <select
                                className="form-control"
                                id="stars"
                                value={this.state.stars}
                                onChange={this.inputChangeHandler}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="row">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}


/*
Needs:
    Handle submission
        useState()
    Write a "submission handler" calls "addReview"
    Form element onsubmit
    Add method to movie.js (addReview) that updates state from ReviewForm
        takes Review passes into movie
        calls movies function
        setState {updates the state, previous state + new thing = new full state}

*/