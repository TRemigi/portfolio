import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation (props) {
    const { navSelected, setNavSelected } = props;

    return (
            <Navbar className="bigger-bar fixed-top" bg="dark" variant="dark" expand="lg" collapseOnSelect="true">
            <Navbar.Brand onClick={() => setNavSelected("portfolio")}><span className="big-neon navbrand">Taylor Remigi</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="container-fluid justify-content-end">
                    <Nav.Link eventKey="1" className={`${navSelected === "portfolio" && "active"}`} onClick={() => setNavSelected("portfolio")}>Portfolio</Nav.Link>
                    <Nav.Link eventKey="1" onClick={() => setNavSelected("about")}>About</Nav.Link>
                    <Nav.Link eventKey="1" onClick={() => setNavSelected("contact")}>Contact</Nav.Link>
                    <Nav.Link eventKey="1" onClick={() => setNavSelected("resume")}>Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}

export default Navigation;