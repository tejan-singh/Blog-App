import React from "react";

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
                <li className="navbar-item"><a className="nav-link" href="/">Home</a></li>
                <li className="navbar-item"><a className="nav-link" href="/about">About</a></li>
                <li className="navbar-item"><a className="nav-link" href="/signup">Sign Up</a></li>
                <li className="navbar-item"><a className="nav-link" href="/login">Login</a></li>
            </ul>
            </div>
        </nav>
        </div>
    )
}

export default NavBar;