import React from "react";
import Review from "./Review";
//ReviewList: a container inside of a Movie that houses Review components.

export default class ReviewList extends React.Component {
    //Yeah so actually ReviewList never needed state in the first place
    //Only using ReviewList to hold the reviews while I pass the contents of the Reviews
        //from the state of Movie into the individual Review components 
        render() {  
        const { reviews } = this.props;
        console.log(reviews)
        return (
            <div>
                {reviews.map((review, index) => (
                    <div key={index}>
                        <Review {...review}/>
                    </div>
                ))}
            </div>
        )
    }
}