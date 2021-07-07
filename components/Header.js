import Link from 'next/link';
import logo from '../backend/static/images/logo.png';
import cart from '../backend/static/images/cart.svg'
import Image from 'next/image'
import { Nav, Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext } from 'react';
import Cart from './Cart/Cart';
import { auth, db } from '../firebase';
import Router from 'next/router';
import { CartContext } from './Cart/CartContext';
import { CartStateContext } from './Cart/CartStateContext';

const Header = ({ user }) => {

    const [error, setError] = useState('');
    const { shoppingCart, totalPrice, totalQty, dispatch } = useContext(CartContext);
    const { toggle, setToggle } = useContext(CartStateContext);

    const managefunction = () => {
        setToggle(!toggle);
    }

    const signout = () => {
        auth.signOut().then(() => {
            db.collection('CartData').doc(user).set({
                CartProducts: {
                    shoppingCart: shoppingCart,
                    totalPrice: totalPrice,
                    totalQty: totalQty,
                }
            }).then(() => {
                dispatch({ type: 'EMPTY' })
            }).catch(err => setError(err.message))
            Router.push({
                pathname: `/`,
            })
        })
    }

    return (
        <Navbar bg="light" expand="lg" style={{ padding: '15px' }}>
            <Link href="/" passHref><Nav.Link><Image src={logo} alt="Sabka Bazaar" /></Nav.Link></Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-4 my-lg-0"
                    style={{ maxHeight: '1000px' }}
                    navbarScroll
                >
                    <Link href="/" passHref><Nav.Link style={{ padding: '10px' }}><b>Home</b></Nav.Link></Link>
                    <Link href="/products" passHref><Nav.Link style={{ padding: '10px' }}><b>Products</b></Nav.Link></Link>

                </Nav>
                {user && <Nav className="d-flex" >
                    <Button style={{ textAlign: 'left', cursor: 'auto' }} disabled variant="light"><i><b>{user}</b></i></Button>
                    <Button style={{ textAlign: 'left' }} variant="light" onClick={signout}><b>SignOff</b></Button>
                </Nav>}
                {!user && <Nav className="d-flex">
                    <Link href="/login" passHref><Nav.Link><b>SignIn</b></Nav.Link></Link>
                    <Link href="/signup" passHref><Nav.Link><b>Register</b></Nav.Link></Link>
                </Nav>}
            </Navbar.Collapse>
            <Nav className="d-flex">
                <Button variant="light" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onClick={managefunction}>
                    <Image width='40px' src={cart} alt="Cart" />
                    <span>{totalQty} items</span>
                </Button>
                <Cart />
            </Nav>
        </Navbar >
    )
}

export default Header;
