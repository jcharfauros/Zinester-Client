// import React, { useState } from 'react';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { 
    Form, 
    FormGroup, 
    // Label, 
    Input, 
    Button,
    // Modal,
    // ModalHeader,
    // ModalBody,
    // Alert 
} from 'reactstrap';
import '../App.css';
import ApiURL from '../helper/Environment';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${ApiURL}/user/login`, {
            method: 'POST', 
            body: JSON.stringify({
                username: this.state.username,
                // email: this.state.email, 
                passwordhash: this.state.password
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (!data.sessionToken) {
                alert('Incorrect input, please try again!');
                return;
            }
            this.props.updateToken(data.sessionToken);
            // this.handleClick();
            // localStorage.setItem('name', data.user.name);
            // localStorage.setItem("name", this.props.user.name);
            window.location.href = '/home';
        })        
    };

    handleClick = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div id='bg-green'>
                <h1 id='bg-pink'>Login</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Input
                            onChange={(e) => this.setState( {username: e.target.value} )}
                            name='username'
                            value={this.username}
                            placeholder='Username' />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                            onChange={(e) => this.setState( {password: e.target.value} )} 
                            name='password' 
                            value={this.password}
                            placeholder='Password' />
                    </FormGroup>
                        <Button 
                            type='submit'
                            className='btn-create'
                        >
                            Login
                        </Button>        
                </Form>
            </div>
        );
    }
}

export default withRouter(Login);