import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignIn and SignUp/SignUpPage";
import SignInPage from "./pages/SignIn and SignUp/SignInPage";
import PlayQuizAPIPage from "./pages/PlayQuizAPIPage/PlayQuizAPIPage";
import FlashcardsPage from "./pages/FlashcardsPage/FlashcardsPage";
import {AuthContextProvider} from "./data/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
    return(
        <>
            <Router>
                <Navbar/>
                <AuthContextProvider>
                    <Routes>

                        <Route path="/" exact element={ <ProtectedRoute> <HomePage/> </ProtectedRoute> } />
                        <Route path="/sign-up" element={ <SignUpPage/> } />
                        <Route path="/sign-in" element={ <SignInPage/> } />
                        <Route path="/api" element={ <ProtectedRoute> <PlayQuizAPIPage/> </ProtectedRoute> } />
                        <Route path="/flashcards" element={ <FlashcardsPage/> } />
                        <Route path="/profile" element={ <ProtectedRoute> <ProfilePage/> </ProtectedRoute> } />
                        <Route path="*" element={ <PageNotFound/> } />
                    </Routes>
                </AuthContextProvider>
            </Router>

        </>
    );
}

export default App;