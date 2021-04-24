import styled from 'styled-components';
import Button from './form/Button';

export default function MyCart() {
    return (
        <OrderDetailsContainer>
            <BlackStripe>
                My Items
            </BlackStripe>
            
            <EachOrderContainer>
                <img src = './static/images/products/beverages/red-label.jpg' alt = 'pic' style = {{ width : '100px', padding : '10px'}}/>
                <div>
                    <ProductNameContainer> Apple - under progress </ProductNameContainer>
                    <ProductQuantityContainer>
                        <Button name = '-' type = 'button' onClickMethod = {() => alert('hi')}/>
                        <Para> 1</Para>
                        <Button name = '+' type = 'button' onClickMethod = {() => alert('hi')}/>
                        <Button name = '*' type = 'button' onClickMethod = {() => alert('hi')}/>
                        <Para> Rs.187</Para>
                    </ProductQuantityContainer>
                </div>
                <div>
                    <h4> Rs. 187</h4>
                </div>
            </EachOrderContainer>
        </OrderDetailsContainer>
    )
}

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
const EachOrderContainer = styled.div`
    background-color : #fff;
    display : flex;
    padding : 20px;
`

const ProductNameContainer = styled.h6`
`
const ProductQuantityContainer = styled.div`
    display : flex;
`
const Para = styled.p`
`