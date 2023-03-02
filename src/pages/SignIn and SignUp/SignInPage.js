import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "../../data/AuthContext";
import { Button } from "../../components/Button/Button";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./SignInPage.css";

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

                <form>
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
                        <Button buttonStyle="btn--outline" buttonSize="btn--large" onClick={ handleSubmit }> SIGN IN </Button>
                    </section>

                    <p> No Account? <Link to="/sign-up"> SIGN UP </Link></p>
                </form>
            </div>
        </div>
    );
}

export default SignInPage;