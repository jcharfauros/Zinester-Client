import React, { Component } from 'react';
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
import zIMG from '../assets/zIMG.png';

class Sitebar extends Component {
    // const [ isOpen, setIsOpen ] = useState(false);
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

   toggle = () => 
        this.setState({ 
            isOpen: !this.state.isOpen 
    });

    loginSignupHide = () => {
        return this.props.sessionToken === localStorage.getItem("token") ? (
            <Button className='btn-navbar' onClick={this.props.clickLogout}>
            Logout
            </Button>
        ) : (
            ''
        )
    };

    render() {
        return (
            <div>
                <Navbar className='navBG-color' expand='md'>
            {/* <NavbarBrand href='/home'> */}
                <NavbarBrand>                
                    <img
                        src={zIMG}
                        alt='zinester_logo'
                        className='logo-img'
                    />                
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
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
                                <Button className='btn-navbar' onClick={this.props.clickLogout}>
                                    Logout
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    };
}

export default Sitebar;