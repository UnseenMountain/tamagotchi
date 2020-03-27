import React from "react";

import { Navbar, Container } from 'react-bootstrap';
import Link from '../auth/LoginPage'
import "./style.css"

function Nav() {

    return (
        <div>
                
            <Navbar bg="dark" variant="dark">
        
                <Navbar.Brand href="#home">Tamagotchi simulator</Navbar.Brand>
                <ul><Link to="login">Login</Link></ul>
        
            </Navbar>
        </div>
    )
}
export default Nav;