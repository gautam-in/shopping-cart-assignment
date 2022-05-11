import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import ButtonComp from '../common/ButtonComp'
import './minicart.style.scss'
import { CartContext } from '../../contexts/CartContext';
import CartItemComp from '../cart_item/CartItemComp'

const MiniCartComp = () =>{
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)
    const toggleCartOpen = () => setIsCartOpen(!isCartOpen)
    const { cartItems, cartTotal } =useContext(CartContext)
    console.log(cartItems);
    return(
            <Container className='cart-dropdown-container'>
                <Row className='cart-items'>
                    
                    <Col>
                        {
                           cartItems && cartItems.map((item) => {return <CartItemComp item={item} />})
                        }
                       
                        <span className='total'>Total: {cartTotal}</span>
                    </Col>
                    
                </Row>
                <ButtonComp onClick={toggleCartOpen} type='button'>Checkout</ButtonComp>
            </Container>
    )
}
export default MiniCartComp