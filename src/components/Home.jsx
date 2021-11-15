import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import '../App.css';
import zGirlgreen from '../assets/zGirlgreen.png'

export const Home = (props) => {
    return (
        <Container className='home-component' fluid>             
                <Row>
                    <Col xs={12} md={8}>
                        <img
                            src={zGirlgreen}
                            alt='zinester_logo'
                            className='zine-grl-grn'
                        />
                    </Col>
                    <Col xs={6} md={4} className='home-text'>
                        <h1><span>Welcome Zinester!!</span></h1>
                        <p><span><span id='word-emph'>Zinester</span> (noun) zine·ster | \ 'zēn-ster \</span><span id='p-white'> 1. one who compiles and publishes a zine.</span>
                        </p>
                        <p><span>Zinester is an online virtal library of zines and independent comic creators.</span></p>
                        <p><span>Any Zinester can upload a zine or comic to our database. Please note that these uploads are subject to approval and may be deleted if deemed inapporate or not credited to the creator correctly. Please see the upload guidelines section for more info.</span></p>
                        <p><span id='p-thistle'><span id='word-emph'>NOTE:</span> If you see your zine/comic listed and do not want it in this library, please email admin@zinester.com and we will remove it.</span></p>
                    </Col>               
                </Row>
               
        </Container>
    )
}