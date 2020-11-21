import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './style.css';
import {Link} from 'react-router-dom';

function Navigation() {

    return (
        <Navbar bg="light" expand="lg">
            <div className='nav-area width-limit'>
            <Navbar.Brand href="/">Bobby Sporman</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/portfolio">Portfolio</Link>
                    <Link className='nav-link' to="/contact">Contact</Link>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    )
}
export default Navigation;