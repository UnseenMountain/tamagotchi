import React from "react";

import { Container, Navbar } from 'react-bootstrap';

function Nav() {

    return (
        <div>
            <Container>
                <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="https://github.com/UnseenMountain/tamagotchi">Tamagotchi Simulator</Navbar.Brand>
                </Navbar>
            </Container>
        </div>

    )
}

export default Nav;