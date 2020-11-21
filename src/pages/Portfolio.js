import React from 'react';
import Header from '../components/Header/Header';
import { Card, Button } from 'react-bootstrap';
import Codequiz from './assets/code-quiz.png';
import Vocabularybee from './assets/vocabulary-bee.png';
import projects from './assets/projects.json';
import './assets/main-style.css';

function Portfolio() {
    const images = {
        Codequiz,
        Vocabularybee

    };
    return (
        <>
            <Header />
            <main className='width-limit display-flex'>
                <section className='card-group'>
                    {projects.map(proj =>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={images[proj.image]} />
                            <Card.Body>
                                <Card.Title>{proj.title}</Card.Title>
                                <Card.Text>
                                    {proj.description}
                                </Card.Text>
                                <a href={proj.site}><Button variant="primary">Site</Button></a>

                                <a href={proj.github}><Button variant="primary">Github Repo</Button></a>
                            </Card.Body>
                        </Card>
                    )
                    }
                </section>
            </main>
        </>
    )
}
export default Portfolio;