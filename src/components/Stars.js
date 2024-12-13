import React from "react";

//Stars: a one to five-star Stars component that allows users to rate something
//(movies in this case, but remember that components are reusable, so you could use it elsewhere!)

export default class Stars extends React.Component {
    render() {
        const stars = this.props.stars;
        console.log(stars)
        const totalStars = [];
        for (let x = 0; x < stars; x++) {
            totalStars.push(
                <img className="starImg" key={x} src="https://www.pngarts.com/files/8/3D-Star-Transparent-Images.png" height="40px"></img>
            )
        }
        return (
            <div>
                {totalStars}
            </div>
        )
        
    }
}