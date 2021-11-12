import React, { useState } from 'react';
import '../App.css';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import { Link } from "react-router-dom";

export const Sitebar = (props) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    return (
        <Navbar color='faded' light expand='md'>
            <NavbarBrand>
                {/* <Link to='/home'> */}
                    Zinester
                {/* </Link> */}
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem id='navLinks'>
                    <Link to='/home'>
                            Home
                        </Link>
                    </NavItem>    
                    <NavItem id='navLinks'>                        
                        <Link to='/index'>
                            Zines
                        </Link>                       
                    </NavItem>
                    <NavItem id='navLinks'>
                        <Link to='/readinglist'>
                            Favorites
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Button className='btn-navbar' onClick={props.clickLogout}>
                            Logout
                        </Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}