import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import '../App.css';
import Signup from '../auth/Signup';
import Login from '../auth/Login';
import zfrontgirl_npbg from '../assets/zfrontgirl_npbg.png';

class Landing extends Component {
    render() {
        return (
            <Container className='home-component' fluid>             
                <Row>                    
                    <Col xs={6} md={4}>
                        <h1><span>Welcome to Zinester                            
                        </span></h1>
                        <p id='bg-green'><span>Zinester (noun) zine·ster | \ 'zēn-ster \</span><span id='p-white'> 1. one who compiles and publishes a zine.</span>
                        </p>
                        <img
                            src={zfrontgirl_npbg}
                            alt='zinesterGirl'
                            className='zine-grl'
                        />
                    </Col>
                    <Col xs={6} md={4}>
                        <Signup updateToken={this.props.updateToken} />                     
                    </Col>
                    <Col xs={6} md={4}>
                        <Login updateToken={this.props.updateToken}/>
                    </Col>
                </Row>               
            </Container>
        )
    }
}

export default Landing;