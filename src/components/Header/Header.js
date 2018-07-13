import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <div className="title">
            <h1>Clicky Game</h1>
        </div>
        <div className="instructions">
            <p>Click on an Image to Start the Game!</p>
        </div>
        <div className="score">
            <p>Score:  {props.score} Highest Score:  {props.highScore}</p>
        </div>
    </div>
);

export default Header;