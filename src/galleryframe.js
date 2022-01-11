import React from "react";

function GalleryFrame(props){
    return(
        <div style={{'width': '100%'}}>
            <img src={props.objectImg} alt={props.title} id="main-image"></img>
            <h3>{props.title}</h3>
            <p>{props.artist}</p>
        </div>
    )
}

export default GalleryFrame