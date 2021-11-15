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
import zTitleimg from '../assets/zTitleimg.png';

export const Sitebar = (props) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    const loginSignupHide = () => {
        return props.sessionToken === localStorage.getItem("token") ? (
            <Button className='btn-navbar' onClick={props.clickLogout}>
            Logout
            </Button>
        ) : (
            ''
        )
      };

    return (
        <Navbar className='navBG-color' expand='md'>
            {/* <NavbarBrand href='/home'> */}
            <NavbarBrand>
                {/* <Link to='/home'> */}
                    <img
                        src={zTitleimg}
                        alt='zinester_logo'
                        className='logo-img'
                    />
                {/* </Link> */}
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem id='navLinks' className='btn-navbar'>
                    <Link to='/home'>
                            Home
                        </Link>
                    </NavItem>    
                    <NavItem id='navLinks' className='btn-navbar'>                        
                        <Link to='/index'>
                            Zines
                        </Link>                       
                    </NavItem>
                    <NavItem id='navLinks' className='btn-navbar'>
                        <Link to='/comicindex'>
                            Comics
                        </Link>
                    </NavItem>
                    <NavItem>
                        {/* {loginSignupHide()} */}
                        <Button className='btn-navbar' onClick={props.clickLogout}>
                            Logout
                        </Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}