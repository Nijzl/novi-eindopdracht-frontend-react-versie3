import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../data/AuthContext";
import Footer from "../components/Footer";
import "../styles/ProfilePage.css";

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
            <div className="profile">
                <h1> PROFILE PAGE </h1>
                <h2> Welcome back! </h2>
                <p> Currently signed in: { user && user.email } </p>
            </div>

            <div className="sign-out">
                <h3> Done for now? </h3>
                <div className="sign-out-btn">
                    <button onClick={ handleLogout }> SIGN OUT </button>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default ProfilePage