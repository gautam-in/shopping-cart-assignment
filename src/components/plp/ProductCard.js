import React, {useContext} from 'react';
import  './productCard.style.scss'
import {Container,Row, Col, Figure, Card} from 'react-bootstrap'
import { CartContext } from '../../contexts/CartContext';
import ButtonComp from '../common/ButtonComp';

// const images = require.context('../../static/images/products', true);
function ProductCard({product}) {
    const {name, price, description, imageURL} = product
    const {addItemToCart} =useContext(CartContext)
    const addProductsToCart =() => addItemToCart(product)
    
    return (
        <section  className='card' >
                        <Card style={{ width: '12rem' }}>
                            <Card.Img variant="top" src={imageURL} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text className='description'>
                                    {description.substring(0,50)}
                                </Card.Text>
                               
                            </Card.Body>
                            <footer>
                            MRP Rs. {price}<ButtonComp type="button" onClick={addProductsToCart}>Buy Now</ButtonComp>
                            </footer>
                            </Card>
            
            
        </section>
        
    );
}

export default ProductCard;