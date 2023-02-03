import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBkpZwX5P21IJL88qZXfQyfL9UPpbb6gvc",
    authDomain: "novi-frontend-test.firebaseapp.com",
    projectId: "novi-frontend-test",
    storageBucket: "novi-frontend-test.appspot.com",
    messagingSenderId: "929731890842",
    appId: "1:929731890842:web:0022cd13ab865ca5e99923"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app