import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../data/AuthContext";
import "../styles/SignInPage.css";
import ErrorMessage from "../components/ErrorMessage";

function SignUpPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { createUser } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError('');
        try {
            await createUser(email, password);
            navigate("/profile");
        } catch (e) {
            switch (e.code) {
                case "auth/email-already-in-use":
                    setError("Email already in use");
                    break;
                case "auth/invalid-email":
                    setError("Invalid email");
                    break;
                case "auth/weak-password":
                    setError("Password too short");
                    break;
                default:
                    setError("Something went wrong. Please try again");
                    break;
            }
        }
    }

    return (
        <>
            <div className='sign-in-container'>
                <div className="content">
                    <div className="grid-item">

                        <h1> SIGN UP </h1>
                        <h2> Create an account and let's get started </h2>

                        <form onSubmit={ handleSubmit }>
                            <div className="input">
                                <label>
                                    Email
                                </label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email"/>
                            </div>

                            <div className="input">
                                <label>
                                    Password
                                </label>
                                <input onChange={ (e) =>setPassword(e.target.value)} type="password"/>
                            </div>

                            {error && <ErrorMessage> { error } </ErrorMessage>}

                            <button> SIGN UP </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUpPage;