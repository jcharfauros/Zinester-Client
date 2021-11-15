import React, { useState } from 'react';
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

const Login = (props) => {
    const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/login', {
            method: 'POST', 
            body: JSON.stringify({
                username: username,
                // email: email, 
                passwordhash: password
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((response) => response.json())
        .then((data) => {
            props.updateToken(data.sessionToken);
            console.log(data);
        })        
    };

    return (
        <div>
            <h1 id='bg-pink'>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input
                        onChange={(e) => setUsername(e.target.value)}
                        name='username'
                        value={username}
                        placeholder='Username' />
                </FormGroup>
                {/* <FormGroup>
                    <Label htmlFor='email'>Email</Label>
                    <Input 
                        onChange={(e) => setEmail(e.target.value)} 
                        name='email' 
                        value={email}
                        placeholder='email' />
                </FormGroup> */}
                <FormGroup>
                    {/* <Label htmlFor='password'>Password</Label> */}
                    <Input 
                        onChange={(e) => setPassword(e.target.value)} 
                        name='password' 
                        value={password}
                        placeholder='Password' />
                </FormGroup>
                <Button type='submit'>Login</Button>
            </Form>
        </div>
    );
};

export default Login;