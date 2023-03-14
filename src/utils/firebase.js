// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvfsEh6M6KNcLT48IsCXgSRJBoxztsoeI",
    authDomain: "rick-and-morty-d5bfc.firebaseapp.com",
    projectId: "rick-and-morty-d5bfc",
    storageBucket: "rick-and-morty-d5bfc.appspot.com",
    messagingSenderId: "525476880495",
    appId: "1:525476880495:web:053334427a50707dbb6d9a",
    measurementId: "G-DLJKTZBV7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);