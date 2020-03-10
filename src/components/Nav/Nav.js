import React from "react";

import { Navbar } from 'react-bootstrap';

function Nav() {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Tamagotchi simulator</Navbar.Brand>
            </Navbar>
        </div>
    )
}
export default Nav;