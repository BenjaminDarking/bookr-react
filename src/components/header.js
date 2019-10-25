import React from "react";
import logo from "./bookr-logo-white.png"
import "../App.css";


function Header() {

    return (
        <header style={headerStyle}>

            <div class="headerLogo">
                <img src={logo} alt="logo" width="170" height="170"></img>
            </div>
            <div class="menuItems">
                <a href="">About Us</a>
            </div>
            <div class="btn-group">
                <button class="button">About Us</button>
                <button class="button">Menu</button>
                <button class="button">Book a Table</button>
                <button class="button">Contact Us</button>
            </div>
        </header>
    );
}

const headerStyle = {
    background: "#333",
    fontFamily: "courier",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
};

export default Header;