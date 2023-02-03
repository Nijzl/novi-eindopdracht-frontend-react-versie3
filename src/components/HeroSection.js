import React from "react";
import "../styles/HeroSection.css";

function HeroSection(){
    return(
        <div className="hero-container">
            <h1> Welcome to TriviApp <i className="fa-solid fa-swatchbook"/> </h1>
            <h2> Expand your knowledge </h2>
        </div>
    );
}

export default HeroSection;