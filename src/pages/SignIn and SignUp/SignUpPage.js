import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../data/AuthContext";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./SignInPage.css";
import {Button} from "../../components/Button/Button";

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
                    <section className="input-container">
                        <label>
                            Email:
                        </label>
                        <input className="input-field" onChange={(e) =>setEmail(e.target.value)} type="email"/>
                    </section>

                    <section className="input-container">
                        <label>
                            Password:
                        </label>
                        <input className="input-field" onChange={(e) =>setPassword(e.target.value)} type="password"/>
                    </section>

                    { error && <ErrorMessage> { error } </ErrorMessage> }

                    <section className="sign-in-btn">
                        <Button buttonStyle="btn--outline" buttonSize="btn--large" onClick={ handleSubmit }> SIGN UP </Button>
                    </section>

                    <p> Already Registered? <Link to="/sign-in"> SIGN IN </Link></p>
                </form>
            </div>
        </div>
    );
}

export default SignUpPage;