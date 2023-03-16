import React, { useState } from "react";
import {Link} from "react-router-dom";
import "../style/signin.css"
import {FcGoogle} from "react-icons/fc";
import {AiFillFacebook} from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider} from "firebase/auth";
import { auth } from "../utils/firebase";




export default function Signin(props){
    // Google
    const googleProvider = new GoogleAuthProvider();
    const [isTrue, setIsTrue] = useState(false)
    const GoogleLogin = async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log(result.user);
        console.log(result.user.email);
        setIsTrue(true)
      } catch (error) {
        console.log(error);
      }
    };
    // Facebook
    const fbProvider = new FacebookAuthProvider();
    const FacebookLogin = async () => {
        try {
            const result = await signInWithPopup(auth, fbProvider);
            console.log(result.user);
            console.log(result.user.email);
            setIsTrue(true)
          } catch (error) {
            console.log(error);
          } 
    }


    return(
        <div className="login_container">
            <div>
                <h1 className="login_title">Hi &#128578; You need to Sign in </h1>
                <p>Choose one of the following options</p>
                <div className="signin_buttons">
                    <Link to='/characters' className="link">
                        <button onClick={GoogleLogin} className="signin_btn">
                            <FcGoogle className="icon" />
                            Sign in with Google
                        </button>
                    </Link>
                    <Link to='/characters' className="link">
                        <button onClick={FacebookLogin} className="signin_btn">
                            <AiFillFacebook className="icon fb"  />
                            Sign in with Facebook
                        </button>                   
                    </Link>

                </div>                
            </div>

        </div>
    )
}