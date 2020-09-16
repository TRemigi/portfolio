import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavComponent (props) {
    const { navSelected, setNavSelected } = props;

    return (
        <header>
            <Navbar className="bigger-bar fixed-top" bg="dark" variant="dark" expand="lg" collapseOnSelect="true">
            <Navbar.Brand href="#home"><span className="big-neon glowing flicker-4">Taylor Remigi</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="container-fluid justify-content-end">
                    <Nav.Link href="#home" onClick={() => setNavSelected("home")}>Home</Nav.Link>
                    <Nav.Link href="#about" onClick={() => setNavSelected("about")}>About</Nav.Link>
                    <Nav.Link href="#projects" onClick={() => setNavSelected("projects")}>Projects</Nav.Link>
                    <Nav.Link href="#contact" onClick={() => setNavSelected("contact")}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default NavComponent;