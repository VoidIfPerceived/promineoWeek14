import React from "react";
import Review from "./Review";
import MovieDBService from "./MovieDBService";
//ReviewList: a container inside of a Movie that houses Review components.

let reviews = MovieDBService();

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        const reviews = this.props;
        this.setState([reviews]);
    }

    render() {
        console.log(this.state)
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