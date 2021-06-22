import React from 'react';
import { Navbar,Container } from 'react-bootstrap';
import {ReactComponent as Logo} from '../images/logo.svg';

const navBarStyles = {
    backgroundColor: "lightblue"
}

const Header = ({title}) => {
    return (
        <Navbar style={navBarStyles} expand="lg">
            <Container>
                <Logo alt={title} style={{maxWidth:'12rem',maxHeight:'4rem'}}/>
            </Container>
        </Navbar>
    );
}

export default Header;