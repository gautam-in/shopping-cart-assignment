import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import DivButton from './form/DivButton';
import { increment, decrement } from '../redux/actions'

function CartItem({ productObj, increment, decrement}) {
    const { name, quantity, price, imageURL , description, id} = productObj;
    
    return (
        <div style = {{ display : 'flex'}}>
            <img src = {imageURL} alt = {description} style = {{ width : '30%', padding : '10px'}}/>
            <div style = {{ width : '50%'}}>
                <ProductNameContainer> { name } </ProductNameContainer>
                <ProductQuantityContainer>                    
                    <DivButton content = '-' clickHandler = {() => decrement(id)}/>
                    <p> {quantity} </p>
                    <DivButton content = '+' clickHandler = {() => increment(id)}/>
                    <span style = {{ margin : 'auto 10px'}}> {price} </span>
                </ProductQuantityContainer>
            </div>
            <EachItemValueContainer> {quantity * price} </EachItemValueContainer>
        </div>
    )
}


export default connect(null, { increment, decrement})(CartItem);


const ProductNameContainer = styled.p`
    font-size : 12px;    
`
const ProductQuantityContainer = styled.div`
    display : flex;    
`
const EachItemValueContainer = styled.h6`   
    margin: auto;       
`