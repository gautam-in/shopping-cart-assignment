import styled from "styled-components"
//CART RELATED
export const CartOverLay = styled.div`
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
    cursor: pointer;
` 
export const CartContainer = styled.div`
    width: 33%;
    min-height: 600px;
    background-color: #fdfdf8;
    position: absolute;
    bottom: 0;
    right: 1.2rem;

    @media (max-width: 75em) {
        width: 40%;
    }


    @media (max-width: 62em) {
        width: 85%;
        left: 50%;
        top: 50px;
        transform: translate(-50%, 0);
    }
`

export const CartItemContainer = styled.div`
    display: grid;
    grid-template-areas: "image title title title"
                         "image quantity quantity price";
    margin: 1.2rem 0;
    background-color: #ddddc6;
`
export const CartBody = styled.div`
    overflow-y: scroll;
`

export const CartHeader = styled.div`
    background-color: black;
    color: #fff;
    padding: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
        color: #fff;
        font-size: 1.8rem;
    }
`

export const CartHeaderTitle = styled.p`
    font-size: 1.8rem;
`

export const ProductImageContainer = styled.div`
    grid-area: image;
    height: 9.6rem;
    width: 9.6rem;

    img  {
        width: 100%;
        height: 100%;
    }
`
export const ProductTitle = styled.p`
    grid-area: title;
    background-color: #ddddc6;
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
`

export const QuantitySeaction = styled.div`
    grid-area: quantity;
    display: flex;
    align-items: center;
    font-size: 1.2rem;

    button {
        font-size: 1.4rem;
        font-weight: bold;
        padding: 2px;
        cursor: pointer;
    }
`

export const ProductPrice = styled.h4`
    grid-area: price;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
`

export const CheckoutBtnContainer = styled.div` 
    background-color: #e6e6e6;
    padding: 1.2rem;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;

    p {
        text-align: center;
        font-size : 1.2rem; 
    }
`

export const CheckoutBtn = styled.button`
    border: none;
    width: 100%;
    margin-top: 1.2rem;
    padding: 1.2rem;
    border-radius: 5px;
    background-color: #e96443;
    color: #ffffff;
    font-size: 1.8rem;
`