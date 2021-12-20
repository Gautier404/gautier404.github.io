import React from 'react';
import {Picture} from './Picture.js'
import '../Styles/Gallery.css';

export function Gallery(props) {
    let gallerySize = props.galleryItems.length;
    let galleryElements = [];
    for (let i = 0; i < gallerySize; i++){
        galleryElements.push(
            <Picture link = {props.galleryItems[i].link}
            description = {props.galleryItems[i].description}
            height = "20vh"
            ></Picture>)
    }
    return(
        <div className = "Gallery">
            {galleryElements}
        </div> 
    )
}