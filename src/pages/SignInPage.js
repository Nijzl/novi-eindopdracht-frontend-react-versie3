import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "../data/AuthContext";
import "../styles/SignInPage.css";

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            navigate('/profile')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    };

    return (
        <div className="sign-in-container">
            <div className="content">
                <div className="grid-container">
                    <div className="grid-item">
                        <h1> SIGN IN PAGE </h1>
                        <h2> Sign in to start quizzing </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="input">
                                <label>
                                    Email:
                                </label>
                                <input onChange={(e) =>setEmail(e.target.value)} type="email"/>
                            </div>
                            <div className="input">
                                <label>
                                    Password:
                                </label>
                                <input onChange={(e) =>setPassword(e.target.value)} type="password"/>
                            </div>

                            {error && <div className="error"> Information Incorrect. Please try again </div>}

                            <div className="sign-in-btn">
                                <button> SIGN IN </button>
                            </div>

                            <p> Don't have an account yet? <Link to="/sign-up"> SIGN UP </Link></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>


    );
}

export default SignInPage;