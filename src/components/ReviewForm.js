import React from "react";

export default class ReviewForm extends React.Component {
    
    constructor(props) {
        super(props)
        const submissionHandler = (reviewData) => {
            return("handler")
        }
    }

    render() {
        return (
            <form onSubmit={"insert handler here"}>
                <div className="form-group">
                    <div className="container">
                        <div className="row">
                            <label htmlFor="reviewInput">Review</label>
                            <textarea type="text" id="reviewInput" className="form-control" rows="3" placeholder="Review"></textarea>
                        </div>
                        <div className="row">
                            <button className="btn btn-primary">Submit</button>
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