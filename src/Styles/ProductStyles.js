import styled from "styled-components";

export const PRODUCT_CARD = styled.div`
border-radius: 3px;
    border-bottom: 1px dashed #4d4d4d;
    box-shadow: 12px 0 15px -4px #ddd, -12px 0 8px -4px #ddd;
    height: 425px;
    @media(max-width: 480px){
        height: 290px;
        max-width: 470px;
    }
    @media(min-width:481px) and (max-width: 768px){
        height: 400px;
        max-width: 287px;
    }
`

export const PRODUCT_CARD_WRAPPER = styled.div`
display: grid;
grid-template-columns: 1fr;
@media(max-width: 480px){
    margin-left: 11px;
    grid-template-areas: "product-heading product-heading"
                     "product-img product-description"
                     "product-img product-purchase-style";
                     grid-template-columns: 132px 0.9fr;
                     grid-template-rows: 89px;
    }
    @media(min-width:481px) and (max-width: 768px){
        grid-template-areas: "product-heading product-heading"
                     "product-img product-description"
                     "product-purchase-style product-purchase-style";
                     grid-template-columns: 132px 0.9fr;
    grid-template-rows: 88px 248px 30px;
    }
max-height: 20%;
justify-items: center;

`

export const PRODUCT_DESCRIPTION = styled.article`
    max-width: 250px;
    font-size: .7rem;
    height: 4.8rem;
    background: #eaeaea;
    overflow: hidden;
    padding: 5px 5px;
    justify-items: center;
    border-radius: 3px;
    margin: 7px;
    @media(max-width: 480px){
        max-width: 270px;
        grid-area: product-description;
    }
    @media(min-width:481px) and (max-width: 768px){
        grid-area: product-description;
        max-width: 190px;
        height: 89%;
    }
`;

export const PRODUCT_IMG = styled.img`
    /* grid-area: product-img; */
    max-width: 250px;
    max-height: 150px;
    @media(max-width: 480px){
        max-height: 105px;
    }
    @media(min-width:481px) and (max-width: 768px){
        max-height: 105px;
        margin-top: 50%;
    }
`

export const PRODUCT_HEADING = styled.h6`
    max-width: 250px;
    min-height: 3rem;
    text-align: center;
    font-size: 0.98rem;
    @media(max-width: 480px){
        line-height: 1.1;
        min-height: 4rem;
        max-width: 417px;
        grid-area: product-heading;
        text-align: left;
        justify-self: left;
    }
    @media(min-width:481px) and (max-width: 768px){
        line-height: 1.1;
        min-height: 4rem;
        max-width: 190px;
        grid-area: product-heading;
    }
`;

export const PRODUCT_PURCHASE_STYLE = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-width: 250px;
    margin-top: 3px;
    padding-right: 11px;
    @media(max-width: 480px){
        grid-area: product-purchase-style;
        grid-template-columns: 1fr;
        min-width: 190px;
        justify-items: center;
        padding-right: 0px;
    }
    @media(min-width:481px) and (max-width: 768px){
        grid-area: product-purchase-style;
        grid-template-columns: 1fr;
        min-width: 190px;
        justify-items: center;
        padding-right: 0px;
    }
`

export const PRICE_STYLE = styled.article`
    /* grid-area: price-style; */
    box-sizing: border-box;
    font-size: .8rem;
    padding-left: 6px;
`;

export const PURCHASE_BUTTON = styled.div`
    height: 35px;
    background: #bf2957;
    color: white;
    text-align: center;
    line-height: 2;
    cursor: pointer;
    :active{
        color: black;
    }
    @media(max-width: 480px){
        grid-area: purchase-button;
        min-width: 270px;
    }
    @media(min-width:481px) and (max-width: 768px){
        grid-area: purchase-button;
        min-width: 207px;
        margin-left: 12px;
    }
`

export const PRODUCT_WRAPPER = styled.main`
    max-width: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-items: center;
    margin-bottom: 25px;
`
export const RIGHT_CONTENT = styled.div`
display: grid;
grid-auto-flow: row;
grid-template-columns: repeat(4, 1fr);
width: 100%;
grid-gap: 5px;
@media(max-width: 480px){
        grid-template-columns: 465px ;
    }
    @media(min-width:481px) and (max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(min-width:901px) and (max-width: 1500px){
        grid-template-columns: repeat(3, 1fr);
    }
`