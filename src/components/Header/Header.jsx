import React from 'react';
import Navigation from './Navigation';
import Bio from './bio-pic.PNG';
import { Figure } from 'react-bootstrap';
import './style.css';

function Header() {

    return (
        <>
            <header className='main-header'>
                <Navigation />
                <div className='width-limit'>
                    <h1>Bobby Sporman</h1>
                    <Figure>
                        <Figure.Image
                            className='bio-img'
                            alt="171x180 booby and daughter"
                            src={Bio}
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </Figure.Caption>
                    </Figure>
                </div>
            </header>
        </>
    )
}

export default Header;