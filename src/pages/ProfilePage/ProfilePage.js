import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../data/AuthContext";
import { Button } from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

import "./ProfilePage.css";


function ProfilePage(){
    const { user, logout } = UserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
        } catch (e){
            console.log(e.message)
        }
    }

    return (
        <>
            <section className="profile">
                <h1> PROFILE PAGE </h1>
                <h2> Welcome back! </h2>
                <p> Currently signed in: { user && user.email } </p>
            </section>

            <section className="sign-out">
                <h3> Done for now? </h3>
                <div className="sign-out-btn">
                    <Button buttonStyle="btn--primary" buttonSize="btn--large" onClick={ handleLogout }> SIGN OUT </Button>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default ProfilePage