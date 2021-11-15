import React, { Component } from 'react';
import { 
    Container,
    Row,
    Col
 } from "reactstrap";
import Login from "./Login";
import { Signup } from "./Signup";
import '../App.css';

class Auth extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md='6'>
                        <Signup updateToken={this.props.updateToken} />
                    </Col>
                    <Col md='6'>
                        <Login updateToken={this.props.updateToken}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Auth;