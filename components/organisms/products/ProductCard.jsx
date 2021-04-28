import Link from 'next/link';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { buyNow } from '../../../redux/actions'

function ProductCard(props) {    
    const productObj = props.product;

    const buyNowClickHandler = (productObj) => {              
        props.buyNow(productObj)
    }

    return (
        <ProductContainer>
            <ProductHeading> {productObj.name} </ProductHeading>
            <img src = {productObj.imageURL} alt = 'pic' />
            <ProductDetails> {productObj.description} </ProductDetails>
            <MrpBuyNowContainer>
                <MRP> {`MRP Rs.${productObj.price}`} </MRP>
                <div onClick = { () => buyNowClickHandler(productObj)}>
                    <BuyNow> Buy Now </BuyNow>
                </div>
            </MrpBuyNowContainer>
        </ProductContainer>
    )
}

export default connect(null, { buyNow })(ProductCard);


const ProductContainer = styled.div.attrs({
    className : 'col span-1-of-4 box'
})` 
    margin : 2px;
    padding: 10px;
    height: 380px;
    border-bottom: 2px dashed #cec8c85c;
`

const ProductHeading =  styled.h6`
    height : 15px;
    font-size : 15px;
    font-weight : 600;
`

const ProductDetails = styled.p`    
    height : 60px; 
    background-color : #f3efefbf;
    overflow: hidden;   
    -webkit-line-clamp: 4; 
`

const MrpBuyNowContainer = styled.div`
    height : 20px;
`

const MRP =  styled.p`
    width : 50%;
    float : left;
    font-size : 12px;    
`

const BuyNow = styled.p`
    color : #fff;
    float : right; 
    background-color : #c31fa2; 
    width : 50%;
    text-align : center;
    display : inline-block;
    background-color : #f31a82;
    cursor: pointer;
    a {
        color : #fff;
    }
`
