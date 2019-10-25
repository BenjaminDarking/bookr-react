import React from "react";
import logo from "./bookr-logo-white.png"
import "../App.css";

function Header() {
    return (
        <header style={headerStyle}>
            <div class="headerLogo">
                <img src={logo} alt="logo" width="170" height="170"></img>
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