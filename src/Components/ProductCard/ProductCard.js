import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button.js';
import useMediaQuery from '../../Hooks/useMediaQuery';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, upateCart} from '../../Redux/actions/cart';

const ProductCardContent = styled.div`
    min-width: 100%;
    min-height: 400px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px dashed #4d4d4d;

    @media(max-width: 480px){
        min-height: 270px;
    }
`;
const ProductCardContentWrapper = styled.div`
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: 480px){
        flex-direction: row;
    }
`;

const ProductCardImage = styled.img`
    max-width: 200px;
    max-height: 150px;
    
    @media(max-width: 480px){
        max-width: 150px;
        max-height: 120px;
    }
`;

const ProductDescription = styled.p`
    max-width: 250px;
    font-size: .9rem;
    height: 4.8rem;
    background: #ddd;
    overflow: hidden;
    padding: 5px 5px;

    @media(max-width: 480px){
        max-width: 200px;
        margin: auto;
    }

`;

const ProductDescriptionHeading = styled.h6`
    max-width: 250px;
    min-height: 4rem;
    @media(max-width: 480px){
        max-width: 300px;
        font-weight: bold;
    }
`;

const ProductBuyWrapper = styled.div`
    min-width: 250px;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
`;

const ProductPrice = styled.p`
    font-size: .8rem;
`;
const ProductCardDescriptionWrapper = styled.div`
    @media(max-width: 480px){
        & button{
            margin: auto;
            min-width: 200px;
        }
    }
`;

export default function ProductCard({ name,id, category, imageURL, price, description }) {
    const isMobile = useMediaQuery("(max-width: 480px)");
    const dispatch = useDispatch();

    return (
        <ProductCardContent>
            <ProductDescriptionHeading>{name}</ProductDescriptionHeading>
            <ProductCardContentWrapper>
                <ProductCardImage src={imageURL} alt='product-image'></ProductCardImage>
                <ProductCardDescriptionWrapper>
                    <ProductDescription>{description}</ProductDescription>

                    <ProductBuyWrapper>
                        {!isMobile && <ProductPrice>{`MRP Rs. ${price}`}</ProductPrice>}
                        <Button onClick={()=>dispatch(upateCart(id,'add'))}>Buy Now</Button>
                    </ProductBuyWrapper>

                </ProductCardDescriptionWrapper>

            </ProductCardContentWrapper>

        </ProductCardContent>
    )
}