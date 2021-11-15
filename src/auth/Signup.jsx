import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import '../App.css';
import ApiURL from '../helper/Environment';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            isZinester: true,
            //toggle: true, /for modal toggle
        };
    }

        handleSubmit = (event) => {
            event.preventDefault();
            fetch(`${ApiURL}/user/signup`, {
                method: 'POST',
                body: JSON.stringify({
                   
                        firstName: this.state.firstname,
                        lastName: this.state.lastname,
                        username: this.state.username,
                        email: this.state.email, 
                        passwordhash: this.state.password,
                        isZinester: this.state.isZinester
                   
                }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if (!data.sessionToken) {
                        alert('Oops, something went wrong, please try again.');
                        return;
                    }
                    this.props.updateToken(data.sessionToken );
                    window.location.href = '/home';
                })
        };

    render() {
        return (
            <div id='bg-green'>
                <h1 id='bg-yellow'>Sign Up</h1>
                <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                        {/* <Label htmlFor='firstname'>First name</Label> */}
                        <Input 
                            onChange={(e) => this.setState({firstname: e.target.value})} 
                            name='firstname' 
                            value={this.firstname}
                            placeholder='First Name' />
                    </FormGroup>
                    <FormGroup>
                        {/* <Label htmlFor='lastname'>Last name</Label> */}
                        <Input 
                            onChange={(e) => this.setState({lastname: e.target.value})} 
                            name='lastname' 
                            value={this.lastname}
                            placeholder='Last Name' />
                    </FormGroup>
                    <FormGroup>
                        {/* <Label htmlFor='username'>Username</Label> */}
                        <Input 
                            onChange={(e) => this.setState({username: e.target.value})} 
                            name='username' 
                            value={this.username}
                            placeholder='Username' />
                    </FormGroup>
                    <FormGroup>
                        {/* <Label htmlFor='email'>Email</Label> */}
                        <Input 
                            onChange={(e) => this.setState({email: e.target.value})} 
                            name='email' 
                            value={this.email} 
                            placeholder='Email' />
                    </FormGroup>
                    <FormGroup>
                        {/* <Label htmlFor='password'>Password</Label> */}
                        <Input 
                            onChange={(e) => this.setState({password: e.target.value})} 
                            name='password' 
                            value={this.password} 
                            placeholder='Password'/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='iszinester'>Zinester</Label>
                        {' '}
                        <Input 
                            onChange={(e) => this.setstate({isZinester: e.target.value})} 
                            name='iszinester'
                            type='checkbox'
                            value={this.isZinester} />
                    </FormGroup>
                    <Button 
                        type='submit'
                        className='btn-create'
                        >
                            Signup
                        </Button>
                </Form>  
            </div>
        )
    }    
}

export default Signup;