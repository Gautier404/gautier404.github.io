import React from 'react';
import face from '../Assets/Me.jpg'
import {IconBar} from './IconBar'
import '../Styles/Header.css';
//Component for the top of the website with my picture and name
export function Header(props) {
    //Links for the icon bar
    const Links = {
        github: "https://github.com/Gautier404",
        linkedIn: "https://www.linkedin.com/in/andrewjgautier/",
        };
    return (
        <div className = "Header">
            <div className = "HeaderIconBar">
                <IconBar links = {Links}/>
            </div>
            <div className = "HeaderImageContainer">
                <img className = "HeaderImage" src ={face} alt = "Drew Gautier"></img>
            </div>
            <div className = "HeaderTextContainer">
                <p className = "HeaderTitle"> 
                    Hello, my name is Drew
                </p>
                <p>
                    and this is a website I created to show my projects!
                </p>
            </div>
        </div>
    )
}