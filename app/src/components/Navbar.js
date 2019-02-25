import React from "react";
import logo from "../logo.svg"
import savedLogo from "../heartLogo.png";

const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo" />
            NYT Google Search
        </a>
        <div className="navbar-nav">
            <a className="nav-item nav-link" href="/savedbooks">
               <span><img src={savedLogo} width="30" height="30" alt="savedLogo"/></span> Favorites
            </a>
        </div>
    </nav>
);

export default Navbar;