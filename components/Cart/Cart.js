import CartStyles from "../../styles/CartStyles";
import { CartContext } from "./CartContext";
import { useContext, useEffect } from "react";
import Router from 'next/router';
import Image from 'next/image';
import Supreme from '../../styles/Supreme';
import CloseButton from "../../styles/CloseButton";
import { Card, Button, Row, Col } from 'react-bootstrap';
import { CartStateContext } from './CartStateContext';
import offer from '../../backend/static/images/lowest-price.png'
import { TokenContext } from "../TokenContext";
import { db } from '../../firebase';


export default function Cart() {

    const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);

    const { toggle, setToggle } = useContext(CartStateContext);

    const { user } = useContext(TokenContext);

    useEffect(() => {
            user && db.collection('CartData').doc(user).get().then(snapshot => {
                if (snapshot.data()) {
                    dispatch({
                        type: 'USER_CART',
                        shoppingCart: snapshot.data().CartProducts.shoppingCart || [],
                        totalPrice: snapshot.data().CartProducts.totalPrice || 0,
                        totalQty: snapshot.data().CartProducts.totalQty || 0
                    })
                }
            })
    }, [user])

    const checkoutFunction = e => {
        e.preventDefault();
        db.collection('CartData').doc(user).set({
            CartProducts: {
                shoppingCart: [],
                totalPrice: 0,
                totalQty: 0,
            }
        })
        dispatch({ type: 'EMPTY' })
        alert('Your order has been placed successfully !!');
        Router.push('/');
        setToggle(false);
    }

    const closeCart = () => {
        setToggle(!toggle);
    }

    function CartItem({ cartItem }) {
        if (!cartItem) return null;
        return (
            <Card style={{ width: 'auto' }}>
                <Row>
                    <Col md={4} lg={4}  >
                        <Image className='card-img-top' src={require(`../../backend${cartItem.imageURL}`).default} alt={cartItem.name} />
                    </Col>
                    <Col>
                        <Card.Body >
                            <Card.Title>{cartItem.name}</Card.Title>
                            <Card.Text>
                                <Button variant="primary"
                                    onClick={() => dispatch({ type: 'DEC', id: cartItem.id, cartItem })}>-</Button>
                                {' '}{cartItem.qty}{' '}
                                <Button variant="primary"
                                    onClick={() => dispatch({ type: 'INC', id: cartItem.id, cartItem })}>+</Button>
                                <em>
                                    &times; ₹{cartItem.price}
                                </em>
                                {' '}={' '}
                                <b >
                                    ₹{cartItem.qty * cartItem.price}
                                </b>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        )
    }

    if (totalQty) {
        return (
            <CartStyles open={toggle}>
                <header>
                    {totalQty > 1 &&
                        <Supreme>My Cart({totalQty} items)
                            <CloseButton onClick={closeCart}>&times;</CloseButton>
                        </Supreme>
                    }
                    {(totalQty === 1 || totalQty === 0) &&
                        <Supreme>My Cart({totalQty} item)
                            <CloseButton onClick={closeCart}>&times;</CloseButton>
                        </Supreme>
                    }
                </header>
                <ul style={{ padding: '0.5px' }}>
                    {shoppingCart.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))}
                </ul>
                <Card style={{ width: 'auto', padding: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Row>
                        <Col md={4} lg={4}  >
                            <Image src={offer} alt="lowest-price" />
                        </Col>
                        <Col md={7} lg={7}>
                            You won't find it cheaper anywhere
                        </Col>
                    </Row>
                </Card>
                <footer>
                    <p style={{ padding: '5px' }}><center>Promo code can be applied on payment page</center></p>
                    <Button variant="primary" style={{ width: '100%' }} onClick={checkoutFunction}>Proceed to Checkout ₹{totalPrice} ></Button>
                </footer>
            </CartStyles>
        )
    }

    else {
        return (
            <CartStyles open={toggle}>
                <header>
                    {totalQty > 1 &&
                        <Supreme>My Cart({totalQty} items)
                            <CloseButton onClick={closeCart}>&times;</CloseButton>
                        </Supreme>
                    }
                    {(totalQty === 1 || totalQty === 0) &&
                        <Supreme>My Cart({totalQty} item)
                            <CloseButton onClick={closeCart}>&times;</CloseButton>
                        </Supreme>
                    }
                </header>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                    <h4>No items in your cart</h4>
                    <p>Your favourite items are just a click away</p>
                    <button style={{ backgroundColor: '#1266F1', color: 'white', width: '90%', borderRadius: '5px', padding: '8px' }}
                        onClick={(e) => {
                            e.preventDefault();
                            setToggle(false);
                            Router.push({
                                pathname: `/products`,
                            })
                        }}>Start Shopping</button>
                </div>
            </CartStyles>
        )
    }
}
