import { useRef } from 'react';
import styled from 'styled-components'
import CartItemsList from './CartItemsList';
import { connect } from 'react-redux';

function Cart(props) {
    const divRef = useRef();
    
    const cartClickHandler = () => {              
        divRef.current.style.display = 'block';        
    }

    const onCloseButtonClick = () => {
        divRef.current.style.display = 'none';
    }
    
    return (
        <div className = 'w3-container'>
            <div style = {{ overflow : 'hidden', backgroundColor : '#0e0e0e0f', cursor: 'pointer'}} onClick = {cartClickHandler}>
                <UnorderedListContainer>
                    <li>
                        <img src = "../static/images/cart.svg" alt = "cart" />
                    </li>
                    <li> {`${props.numberOfItemsInCart} items`} </li>
                </UnorderedListContainer>
            </div>

            <div ref = {divRef} className ="w3-modal">
                <OrderDetailsContainer>
                    <BlackStripe>
                        My Cart ( {`${props.numberOfItemsInCart} items`}) <span onClick = {onCloseButtonClick} style ={{ float : 'right', cursor : 'pointer'}}> X </span>
                    </BlackStripe>
                    <CartItemsList />
                    <CheckOutContainer>
                        Proceed to Checkout <span style = {{ float : 'right'}}>{`Rs. ${props.amountToBePaid} `}</span>
                    </CheckOutContainer>
                </OrderDetailsContainer>                
            </div>

            
        </div>  
    )
}

const mapStateToProps = (state) => {
    const amountToBePaid = state.productsBought.reduce((acc, cur) => {
        const curProductValue = cur.price * cur.quantity;
        return acc + curProductValue;
    }, 0)

    return { 
        numberOfItemsInCart : state.productsBought.length,
        amountToBePaid : amountToBePaid
    }
}
export default connect(mapStateToProps)(Cart);


const UnorderedListContainer = styled.ul`
    display : flex;
    justify-content : center; 
    li {
        margin : 0 5px;
    }
    margin : 0;
`

const OrderDetailsContainer = styled.div`
    width : 30%;
    float : right;
    background-color : #fff;
    height : 450px;
`
const BlackStripe = styled.div`
    background-color : #000;
    color : #fff;
    height : 50px;
    padding : 15px;
`

const CheckOutContainer = styled.div`
    width : 90%;
    margin : 10px auto;
    background-color : #f31a82;
    height : 35px;
    padding : 9px;
    color : #fff;    
`