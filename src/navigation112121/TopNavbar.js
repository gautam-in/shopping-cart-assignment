import React from 'react';
import logo from '../static/images/logo.png'
import {Figure, Navbar, Container, Nav} from 'react-bootstrap'

import './TopNavbar.style.scss'


function TopNavbar(props) {
    return (
        <Navbar bg="light" fixed="top" className='shadow'>
            <Container>
                <Navbar.Brand href="#home">
                <img
                    src={logo}
                    className="d-inline-block align-top"
                    alt="sabka bazar"
                />
                
               
                </Navbar.Brand>
                
            </Container>
        </Navbar>
            
    );
}

export default TopNavbar;