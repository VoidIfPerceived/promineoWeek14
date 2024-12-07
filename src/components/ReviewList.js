import React from "react";
import Review from "./Review";
//ReviewList: a container inside of a Movie that houses Review components.

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        const reviews = this.props.reviews;
        this.setState({reviews});
    }

    render() {
        return (
            <div>
                {this.state.reviews.map((review, index) => (
                    <div key={index}>
                        <Review {...review}/>
                    </div>
                ))}
            </div>
        )
    }
}