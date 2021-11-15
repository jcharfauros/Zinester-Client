import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import '../App.css';
import { Signup } from '../auth/Signup';
import Login from '../auth/Login';
import zfrontgirl_npbg from '../assets/zfrontgirl_npbg.png';
import zIMG from '../assets/zIMG.png';

export const Landing = (props) => {
    return (
        <Container className='home-component' fluid>             
                <Row>
                    {/* <Col xs={12} md={8}> */}
                    {/* <Col md='auto'> */}
                    <Col xs={6} md={4}>
                        <h1><span>Welcome to Zinester
                            {/* <img
                            src={zIMG}
                            alt='zinester_lg_logo'
                            className='zine-landing'
                            /> */}
                        </span></h1>
                        <p><span>Zinester (noun) zine·ster | \ 'zēn-ster \</span><span id='p-pink'> 1. one who compiles and publishes a zine.</span>
                        </p>
                        <img
                            src={zfrontgirl_npbg}
                            alt='zinesterGirl'
                            className='zine-grl'
                        />
                    </Col>
                    <Col xs={6} md={4}>
                        <Signup updateToken={props.updateToken} />                     
                    </Col>
                    <Col xs={6} md={4}>
                    {/* <Col> */}
                        <Login updateToken={props.updateToken}/>
                    </Col>
                </Row>
               
        </Container>
    )
}