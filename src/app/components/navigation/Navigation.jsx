import React from "react";
import { Link } from 'react-router-dom';
import './Navigation.css'


const Navigation=()=>{

    const logOutUser=()=>{
        console.log("logout");
    }


    return(
        <div className="NavigationCom">
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/profile">Profile</Link>
            <br />
            <Link to="/profileGallery">profilePage</Link>
            <br />
            <Link to="/register">Register</Link>
            <br />
            <Link to="/upload">Upload</Link>
            <button onClick={() => logOutUser()}>Log Out</button>
        </div>
    );
}

export default Navigation;

