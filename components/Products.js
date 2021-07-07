import css from '../styles/Products.module.css';
import Link from 'next/link';
import products from '../backend/server/products/index.get.json';
import categories from '../backend/server/categories/index.get.json';
import { Card, Button, CardDeck } from 'react-bootstrap';
import Image from 'next/image';
import Router from 'next/router';
import { useContext, useState } from 'react';
import { CartContext } from './Cart/CartContext';
import { TokenContext } from "./TokenContext";
import { db } from '../firebase';

export default function Products() {

    const [error, setError] = useState('');
    const { shoppingCart, totalPrice, totalQty, dispatch } = useContext(CartContext);
    const { user } = useContext(TokenContext);

    const addProduct = (id, product) => {
        if (user) {
            dispatch({ type: 'ADD_TO_CART', id: id, product })
        }
        else {
            Router.push({
                pathname: `/login`,
            })
        }
    }

    const displayContent = products.map((product) => {
        const { id, key, name, price, description, imageURL } = product;
        return (
            <CardDeck key={key} style={{ display: 'flex', flexDirection: 'row' }}>
                <Card style={{ width: '18rem', padding: '20px' }}>
                    <Card.Title>{name}</Card.Title>
                    <Image className='card-img-top' src={require(`../backend${imageURL}`).default} alt={name} />
                    <Card.Body>
                        <Card.Text style={{ backgroundColor: '#F5F5F5', padding: '5px' }}>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            MRP ₹{price}{' '}
                            <Button variant="primary" onClick={(e) => { addProduct(id, product) }}>Buy Now</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        )
    })

    const productCategory = categories.map((category) => {
        const { id, name, key, enabled } = category;
        if (enabled) {
            if (user) {
                return (
                    <Link onClick={
                        db?.collection('CartData')?.doc(user).set({
                            CartProducts: {
                                shoppingCart: shoppingCart,
                                totalPrice: totalPrice,
                                totalQty: totalQty,
                            }
                        }).then(() => { }).catch(err => setError(err.message))
                    }
                        href={`/products/${id}`}>{name}</Link>
                )
            }
            else {
                return (
                    <div key={key}>
                        <Link href={`/products/${id}`}>{name}</Link>
                    </div>
                )
            }
        }
    })

    return (
        <div className={css.container}>
            <div className={css.sidebar}>
                {productCategory}
            </div>

            <div className={css.main}>
                {displayContent}
            </div>
        </div>
    )
}
