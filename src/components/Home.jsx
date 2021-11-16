import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import '../App.css';
import zGirlgreen from '../assets/zGirlgreen.png';
class Home extends Component {
    render () {
        return (
            <Container className='home-component' fluid>             
                <Row>
                    <Col xs={9} md={6}>
                        <img
                            src={zGirlgreen}
                            alt='zinester_logo'
                            className='zine-grl-grn'
                        />
                    </Col>
                    <Col xs={6} md={5} className='home-text'>
                        <h1><span>Welcome Zinester {`${this.props.name}`}!!</span></h1>
                        {/* i want to add the user's name here                         */}
                        <p><span><span id='word-emph'>Zinester</span> (noun) zine·ster | \ 'zēn-ster \</span></p>
                        <p><span id='p-white'> 1. one who compiles and publishes a zine. 2. one who loves zines.</span>
                        </p>
                        <p><span>Zinester is an online virtual library of zines and independent comic creators.</span></p>
                        <p><span>Any Zinester can upload a zine or comic to our database. Please note that these uploads are subject to approval and may be deleted if deemed inapporate or not credited to the creator correctly. Please see the upload guidelines section for more info.</span></p>
                        <p><span id='p-thistle'><span id='word-emph'>NOTE:</span> If you see your zine/comic listed and do not want it in this library, please email admin@zinester.com and we will remove it.</span></p>
                        <p className='copyright-text'><span id='p-white'>&copy; Zinester 2021</span></p>
                    </Col>               
                </Row>               
        </Container>
    )}
}

export default Home;