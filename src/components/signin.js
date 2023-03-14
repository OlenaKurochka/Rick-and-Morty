import React from "react";
import {Link} from "react-router-dom";
import "../style/signin.css"
import {FcGoogle} from "react-icons/fc";
import {AiFillFacebook} from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { auth } from "../utils/firebase";


export default function Signin(props){
    
    // Google
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log(result.user);
        console.log(result.user.email);
      } catch (error) {
        console.log(error);
      }
    };
    //Facebook



    return(
        <div className="login_container">
            <h1 className="login_title">Hi &#128578; You need to Sign in </h1>
            {/* <p>Choose one of the following options</p> */}
            <div className="signin_buttons">
                <Link to="/characters">
                    <button onClick={GoogleLogin} className="signin_btn">
                        <FcGoogle className="icon" />
                        Sign in with Google
                    </button>
                </Link>
                {/* <button className="signin_btn">
                    <AiFillFacebook className="icon fb"  />
                    Sign in with Facebook
                </button> */}
            </div>
            
        </div>
    )
}