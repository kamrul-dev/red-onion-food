import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo2 from '../../../images/logo2.png'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='text-dark'>
                <Container>
                    <Navbar.Brand>
                        <Link to='/'><img width='80px' src={logo2} alt="" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='me-2'>
                                <AiOutlineShoppingCart></AiOutlineShoppingCart>
                            </Nav.Link>
                            <Nav.Link className='me-2' >Login</Nav.Link>
                            <Nav.Link className='sign-up-btn me-2 text-white'>
                                SignUp
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;