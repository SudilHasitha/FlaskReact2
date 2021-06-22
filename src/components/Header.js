import React from 'react';
import { Navbar,Container } from 'react-bootstrap';

const navBarStyles = {
    backgroundColor: "lightblue"
}

const Header = () => {
    return (
        <Navbar style={navBarStyles} expand="lg">
            <Container>
                <Navbar.Brand href="/">Images Gallery</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;