import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './style.css';

function Navigation() {

    return (
        <Navbar bg="light" expand="lg">
            <div className='nav-area width-limit'>
            <Navbar.Brand href="#home">Bobby Sporman</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    )
}
export default Navigation;