import React from 'react';
import '../Styles/Picture.css';
//Little react component that takes a link to an image, its description and its desired height on the page and renders it centered on the page
export function Picture(props){
    return (
        <div className = "PictureContainer">
            <img src = {props.link} alt = {props.description}   className = "Picture"/>
            <p>{props.description}</p>
        </div>
    )
}