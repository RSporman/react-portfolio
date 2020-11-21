import React from 'react';
import Header from '../components/Header/Header';
import { Card, Button } from 'react-bootstrap';

function Home() {
    const cardInfo = [
        {
            name: 'Address',
            text: '1001 Madison Steet Hoboken, NJ 07030',
            link: 'https://www.google.com/maps/place/1001+Madison+St,+Hoboken,+NJ+07030/@40.7506522,-74.0375182,17z/data=!3m1!4b1!4m5!3m4!1s0x89c257637abd48af:0x914f0896455eacb7!8m2!3d40.7506482!4d-74.0353295',
            button: true,
            buttonText: 'see on Map'
        },
        {
            name: 'Email',
            text: 'bobby.sporman@yahoo.com',
            button: false
        }, 
        {
            name: 'Phone Number',
            text: '908-295-9856',
            button: false,
        },    
        {
            name: 'Resume', 
            text: 'Checkout Recent Projects',
            button: true,
            buttonText: 'Open Resume',
            link: './'
        },
    ];
    return (
        <>
            <Header />
            <main className='width-limit display-flex'>
                {cardInfo.map(i => 
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{i.name}</Card.Title>
                        <Card.Text>
                            {i.text}
                         </Card.Text>
                        <Button variant="primary"></Button>
                    </Card.Body>
                </Card>
            )
                }
            </main>
        </>
    )
}
export default Home;