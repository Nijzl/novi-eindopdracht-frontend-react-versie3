import React from "react";
import "../styles/Footer.css";

function Footer() {

    const year = new Date().getFullYear();

    return(
        <div className="page-footer">
            <p> TriviApp uses the Open Trivia DataBase for its questions and categories </p>
            <p> © LoNi <i className="fa-solid fa-otter"/>, { year } </p>
        </div>
    );
}

export default Footer;


