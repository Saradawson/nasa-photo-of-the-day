import React from "react";

const Image = (props) => {
    return (
        <div className="photo-wraper">
            <h2>{props.image.title}</h2>
            <p>{props.image.date}</p>
            <img src={props.image.hdurl}/>
            <p>{props.image.explanation}</p>
        </div>
    )
}

export default Image;