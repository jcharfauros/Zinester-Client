import React, { useState } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export const Signup = (props) => {
    const [ firstname, setFirstname ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isZinester, setIsZinester ] = useState('');
   
    let handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/signup', {
            method: 'POST',
            body: JSON.stringify({
               
                    firstName: firstname,
                    lastName: lastname,
                    username: username,
                    email: email, 
                    passwordhash: password,
                    isZinester: isZinester
               
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
            .then((response) => response.json())
            .then((data) => { 
                props.updateToken(data.sessionToken );
                console.log(data);
            })
    };
    
    return (
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                    <Label htmlFor='firstname'>First name</Label>
                    <Input onChange={(e) => setFirstname(e.target.value)} name='firstname' value={firstname} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='lastname'>Last name</Label>
                    <Input onChange={(e) => setLastname(e.target.value)} name='lastname' value={lastname} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='username'>Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name='username' value={username} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='email'>Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name='email' value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name='password' value={password} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='iszinester'>Zinester</Label>
                    <Input onChange={(e) => setIsZinester(e.target.value)} name='iszinester' value={isZinester} />
                </FormGroup>
                <Button type='submit'>Signup</Button>
            </Form>  
        </div>
    )
}