import React from "react";
import "./Footer.css";

function Footer() {

    const year = new Date().getFullYear();

    return(
        <footer className="footer-container">
            <p> TriviApp uses the Open Trivia DataBase for its questions and categories </p>
            <p> © LoNi <i className="fa-solid fa-otter"/>, { year } </p>
        </footer>
    );
}

export default Footer;


