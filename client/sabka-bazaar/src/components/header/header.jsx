import './header.scss'
import logo from '../../assets/images/logo.png'
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import React, { useEffect } from 'react';

import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Cart from '../../pages/cart/cart';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import UserService from '../../sevices/user-service';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItem, setCartItem] = useState([])
    const [open, setOpen] = React.useState(false);
    useEffect(() => { getCartData() }, [])
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const navigateTo = (link = '/') => {
        props.history.push(link)
    }
    const getCartData = () => {
        new UserService().getCartData().then(res => res.data).then(data => { setCartItem(data) }).catch(err => console.log(err))
    }
    const getTotalValue=()=>{
       return cartItem.reduce((pre,curr)=>{
            return pre + curr.price * curr.quantity
        },0)
    }
    return <header className='header d-flex flex-row align-items-center justify-content-between'>
        <div className='d-flex flex-row align-items-center'>
            <img className='logo' src={logo} alt="bazar logo" />
            <ul className={`header-ul d-flex flex-row nav-menu ${isOpen ? "active" : ""}`}>
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/products" className='nav-link m-l-25'>Products</Link>
                <div className='d-flex flex-column d-flex-sm d-none'>
                    <Button className='sign-button'>SignIn</Button>
                    {/* <Link to="/" className='sign-button'>SignIn</Link> */}
                    <Button className='sign-button'>Register</Button>
                </div>
            </ul>
        </div>

        <div className='d-flex flex-row'>
            <div>
                <div className='d-flex flex-row d-none-sm'>
                    <Link to="/login" className='sign-button button-space'>SignIn</Link>
                    <Link to="/signup" className='sign-button'>Register</Link>
                </div>
                <Button
                    variant="contained"
                    color="default"
                    onClick={handleClickOpen}
                    startIcon={<ShoppingCartIcon style={{ color: '#D10157' }} />}
                >
                    {cartItem.length} items
                </Button>
            </div>
            <IconButton color="primary" onClick={() => setIsOpen(!isOpen)} aria-label="menu" component="span" style={{ padding: '5px' }}>
                <div className={`hamburger ${isOpen ? "active" : ""}`}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </IconButton>

        </div>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            className='cart-dialog'
        >
            {/* <Cart/> */}
            <header className='cart-header d-flex flex-row justify-content-between align-items-center'><div>my cart  {cartItem.length> 0 && <span className='count'>({cartItem.length} items)</span>}</div>
                <IconButton aria-label="close" onClick={handleClose}>
                    <CloseIcon className='close-icon' />
                </IconButton></header>
            <div className='items'>
                {
                    cartItem.length > 0 ? 
                    <> 
                    {
                    cartItem.map(ele => (
                        <div className='d-flex align-items-center item'>
                            <img className='cart-item-img' src={ele.imageURL} alt={ele.name} />
                            <div className='d-flex flex-column flex-grow m-l-10'>
                                <h2>{ele.name}</h2>
                                <div className='d-flex align-items-center'><button className='circle-button'>-</button> <span className='no-of-item'>{ele.quantity}</span> <button className='circle-button'>+</button> <span className='rupee'>X Rs. <span>{ele.price}</span></span> <span className='total'>Rs.{ele.quantity * ele.price}</span></div>
                            </div>
                        </div>
                    ))
                }
                    </>
                    :
                    <>
                    <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                        <span className='no-item'>No items in your cart</span>
                        <span className='no-item-sub'>Your favourite items are just a click away</span>
                    </div>
                    </>
                }
                


            </div>
            <DialogActions className='action d-flex flex-column'>
                    {cartItem.length > 0  &&  <span>Promo code can be applied on payment page</span> }
                    <Button onClick={handleClose} className='checkout-button' color="primary">
                        {
                            cartItem.length > 0  ? <> <span>proceed to Checkout </span><span>Rs.{getTotalValue()}</span> </> : <span>Start Shopping </span> 
                        }
                        
                    </Button>

            </DialogActions>
        </Dialog>
    </header>
}
export default withRouter(Header)