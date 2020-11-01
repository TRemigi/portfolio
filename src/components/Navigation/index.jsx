import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation (props) {
    const { navSelected, setNavSelected } = props;

    return (
            <Navbar className="bigger-bar fixed-top card-shadow" bg="dark" variant="dark" expand="lg" collapseOnSelect="true">
            <Navbar.Brand href="#home" onClick={() => setNavSelected("home")}><span className="big-neon glowing-less">Taylor Remigi</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="container-fluid justify-content-end">
                    <Nav.Link href="#projects" eventKey="1" className={`${navSelected === "projects" && "active"}`} onClick={() => setNavSelected("projects")}>Projects</Nav.Link>
                    <Nav.Link href="#about" eventKey="1" onClick={() => setNavSelected("about")}>About</Nav.Link>
                    <Nav.Link href="#resume" eventKey="1" onClick={() => setNavSelected("resume")}>Resume</Nav.Link>
                    <Nav.Link href="#contact" eventKey="1" onClick={() => setNavSelected("contact")}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}

export default Navigation;