import React from "react";
import {Link }from "react-router-dom";

function NavBar(){
    return(
        <div>
        <nav className = "navbar navbar-expand-md navbar-dark">
            <a className="navbar-brand">Blog App</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto">
                <li className="navbar-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="navbar-item"><Link className="nav-link" to="/about">About</Link></li>
                <li className="navbar-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>
                <li className="navbar-item"><Link className="nav-link" to="/login">Login</Link></li>
            </ul>
            </div>
        </nav>
        </div>
    )
}

export default NavBar;