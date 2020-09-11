import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function NavComponent (props) {
    const { navSelected, setNavSelected } = props;

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Talor Remigi</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="container-fluid justify-content-end">
                    <Nav.Link className="neon" href="#home" onClick={() => setNavSelected("home")}>Home</Nav.Link>
                    <Nav.Link className="neon" href="#about" onClick={() => setNavSelected("about")}>About</Nav.Link>
                    <Nav.Link className="neon" href="#projects" onClick={() => setNavSelected("about")}>Projects</Nav.Link>
                    <Nav.Link className="neon" href="#contact" onClick={() => setNavSelected("about")}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default NavComponent;