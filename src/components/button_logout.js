import React from "react";
import {Link} from "react-router-dom";
import "../style/button_logout.css"
import { auth } from "../utils/firebase";

export default function Logout(props){
    return(
        <div className="logout_container">
            <Link to="/">
                <button onClick={() => auth.signOut} className="logout_container">Sign out</button>
            </Link>
            
        </div>
    )
}