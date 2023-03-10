import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar(){

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return(
        <>
            <nav className="navbar">
                <header className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={ closeMobileMenu }>
                        TriviApp <i className="fa-solid fa-swatchbook"/>
                    </Link>
                    <div className="menu-icon" onClick={ handleClick }>
                        <i className={ click ? "fas fa-times" : "fas fa-bars" }/>
                    </div>
                    <ul className={ click ? "nav-menu active" : "nav-menu" }>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={ closeMobileMenu }>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/api" className="nav-links" onClick={ closeMobileMenu }>
                                API QUIZ
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/flashcards" className="nav-links" onClick={ closeMobileMenu }>
                                FLASHCARDS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-in" className="nav-links" onClick={ closeMobileMenu }>
                                SIGN IN
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-links" onClick={ closeMobileMenu }>
                                PROFILE
                            </Link>
                        </li>
                    </ul>
                </header>
            </nav>
        </>
    );
}

export default Navbar;