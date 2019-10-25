import React from "react";
import "../App.css";
import background from "./background.jpg"


function Main() {

    return (
        <div>
            <img src={background} alt="background" height="100%" width="100%" background-size="cover"></img>
        </div>
    );
}


export default Main;