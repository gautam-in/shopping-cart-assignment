/* eslint-disable @next/next/link-passhref */
import React, { useState } from 'react'
import { Navbar,Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Link from 'next/link'
import Image from 'next/image'
import CartComponent from './Cart';
import { getCookie, setCookies } from 'cookies-next';

export default function NavBar() {
  const [state, setState] = useState(false)
  var logged = getCookie("status")
  const handleLogout = () =>{
    setCookies("status","")
    setState(!state)
  }
  return (
    <Navbar bg="light" expand="lg" style={{padding:10,boxShadow: '-1px 5px 5px -1px rgba(0, 0, 0, 0.2)'}}>
  <Container>
    <Navbar.Brand ><Link alt="logo" href="/" autofocus="true"><Image src="/logo.png"
      alt="logo"
      width="150%"
      height="70%"/></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="nav">
        <Navbar.Text ><Link href="/" >Home</Link></Navbar.Text>&nbsp;&nbsp;
        <Navbar.Text ><Link href="/products" >Products</Link></Navbar.Text>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className="sign">
      &nbsp;{logged?<button className="logout" onClick={handleLogout}>Logout </button>:<><Link href="/signin">Signin</Link>&nbsp;| &nbsp;<Link href="/signup">Register</Link></>}<br/>
        <CartComponent/>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

