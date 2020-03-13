import React from "react";

import { Navbar } from 'react-bootstrap';
import Link from '../auth/LoginPage'

function Nav() {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Tamagotchi simulator</Navbar.Brand>
            </Navbar>
            <li><Link to="login">Login</Link></li>
        </div>
    )
}
export default Nav;