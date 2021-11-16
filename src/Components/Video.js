import React from 'react';
import '../Styles/Video.css';
//Simple react component for the project info component that displays a centered video with a description
export function Video(props){
    return (
        <div className = "VideoContainer">
            <p>{props.description}</p>
            <iframe src = {props.link}
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen = 'true'
                    title='video'
                    className = "Video"
                />
        </div>
    )
}