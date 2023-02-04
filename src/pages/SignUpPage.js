import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../data/AuthContext";
import ErrorMessage from "../components/ErrorMessage";
import "../styles/SignInPage.css";

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
        <div className="page-container">
            <div className="cover">

                <h2> SIGN UP </h2>

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

                    <p> Already Registered? <Link to="/sign-in"> SIGN IN </Link></p>
                </form>
            </div>
        </div>
    );
}

export default SignUpPage;