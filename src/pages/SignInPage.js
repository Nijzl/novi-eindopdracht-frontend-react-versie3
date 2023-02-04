import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "../data/AuthContext";
import ErrorMessage from "../components/ErrorMessage";
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
        }
    };

    return (
        <div className="page-container">
            <div className="cover">

                <h2> SIGN IN </h2>

                <form onSubmit={ handleSubmit }>
                    <div className="input-container">
                        <label>
                            Email:
                        </label>
                        <input className="input-field" onChange={(e) =>setEmail(e.target.value)} type="email"/>
                    </div>

                    <div className="input-container">
                        <label>
                            Password:
                        </label>
                        <input className="input-field" onChange={(e) =>setPassword(e.target.value)} type="password"/>
                    </div>

                    { error && <ErrorMessage> { error } </ErrorMessage> }

                    <div className="sign-in-btn">
                        <button> SIGN IN </button>
                    </div>

                    <p> No Account? <Link to="/sign-up"> SIGN UP </Link></p>
                </form>
            </div>
        </div>
    );
}

export default SignInPage;