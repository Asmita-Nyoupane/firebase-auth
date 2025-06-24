// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpxZKA9_WBBV5SBCmKUUbIv87gfGW_PQY",
    authDomain: "auth-e8321.firebaseapp.com",
    projectId: "auth-e8321",
    storageBucket: "auth-e8321.firebasestorage.app",
    messagingSenderId: "59887010603",
    appId: "1:59887010603:web:27ffc46e47430bc9187b6e",
    measurementId: "G-EH5NM3E4J5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const githubProvider = new GithubAuthProvider();
export const googleProvider = new GoogleAuthProvider()