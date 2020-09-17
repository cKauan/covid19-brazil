import React from "react";
import "./index.css";

export default function Header() {
    return (
        <header>
            <div className="icons-header">
                <span className="icons">
                    <a href="https://github.com/ckauan">
                        <i className="fab fa-github"></i>
                    </a>
                </span>
                <span className="icons">
                    <a href="https://codepen.io/ckauan">
                        <i className="fab fa-codepen"></i>
                    </a>
                </span>
            </div>
            <div className="main">
                <img
                    src="https://ckauancovid19brasil.herokuapp.com/logo.svg"
                    alt="Logo"
                />
                <h1>COVID 19 | BRASIL</h1>
            </div>
            <span className="author">
                <a href="https://github.com/ckauan"> </a>
                <p>Carlos Kauãn</p>
                <img
                    src="https://avatars3.githubusercontent.com/u/62940724?s=460&u=bbb662a957e0bcd0522723f787dd29d5f841f24f&v=4"
                    alt=""
                />
            </span>
        </header>
    );
}
