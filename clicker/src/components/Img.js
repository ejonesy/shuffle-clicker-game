import React from "react";

const Img = props => {
    return (
    <div className="img-container">
        <img className="img-responsive"
            alt={props.id}
            src={props.image}
            //set up as a function that takes an argument, because each image needs to be diffentiated by whether or not it has been clicked.
            onClick={() => props.handleClick(props.id)}
        />
    </div>
    )
}

export default Img