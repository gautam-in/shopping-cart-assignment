import css from '../styles/Products.module.css';
import Link from 'next/link';
import { Card, Button, CardDeck } from 'react-bootstrap';
import Image from 'next/image';
import Router from 'next/router';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from './Cart/CartContext';
import { TokenContext } from "./TokenContext";
import { db } from '../firebase';

export default function Products() {

    const [productsAll, setProducts] = useState();
    const [categoriesAll, setCategories] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then(res => res.json())
            .then(
                (result) => {
                    setProducts(result);
                })
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/api/categories")
            .then(res => res.json())
            .then(
                (result) => {
                    setCategories(result);
                })
    }, [])

    const [error, setError] = useState('');
    const { shoppingCart, totalPrice, totalQty, dispatch } = useContext(CartContext);
    const { user } = useContext(TokenContext);

    const addProduct = (id, product) => {
        if (user) {
            dispatch({ type: 'ADD_TO_CART', id: id, product })
        }
        else {
            Router.push(`/login`,null, { shallow: true });
        }
    }

    const displayContent = productsAll && productsAll.map((product) => {
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

    const productCategory = categoriesAll && categoriesAll.map((category) => {
        const { id, name, key, enabled } = category;
        if (enabled) {
            return (
                <Link onClick={ user &&
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
