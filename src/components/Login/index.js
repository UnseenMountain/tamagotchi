import React from "react";
import "./style.css"

function Login() {
    return (
        <div classname="buttons">
        <a classname="modal-button is-link" id="okta-button" data-target="#signin-modal" href= "#signin-modal">
        Sign in
        </a>
        <div id="messagebox"></div>
        <a classname="button is-light modal-button" id="logout-button" href= "#logout-button" onclick="logout()">
        Log Out
        </a>
    </div>
    );
}

export default Login;