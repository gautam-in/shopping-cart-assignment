import styled from "styled-components";

export const CartPageWrapper = styled.main`
    max-width: 100%;
    background: #ddd;
    padding-bottom: 2rem;

    @media (max-width: 480px){
        padding-top: 2rem;
        min-height: 6rem;
    }
    @media (min-width:481px) and (max-width: 768px) {
        padding-top: 2rem;
        min-height: 6rem;
    }
`;

export const CartPageHeader = styled.h6`
    font-size: .9rem;
    background-color: #fff;
    padding: 1rem 1rem;
    text-align: left;
    font-weight: bold;
    margin-bottom: 2rem;
`;

export const CartItemsWrapper = styled.div`
    background-color: #fff;
    margin-bottom: 2rem;
`;

export const CartPageDiscountWrapper = styled.div`
    display: flex;
    background-color: #fff;
    max-width: 95%;
    margin: auto;
    justify-content: flex-start;
    align-items: end;
`;

export const CartPageFooterContent = styled.div`
    display: flex;
    background: #d42559;
    justify-content: space-around;
    max-width: 95%;
    margin: auto;
    color: white;
    cursor: pointer;
`;

export const CartPageMessage = styled.p`
    font-size: 0.9rem;
    font-weight: ${props => props.bold ? 'bold' : ''}
`;

export const NoItemInCart = styled.div`
    display: flex;
    flex-direction : column;
    align-items: center;
    justify-content : center;
    min-height: 60vh;
`;

export const CartPageFooterWrapper = styled.div`
    padding-top: 1rem;
    text-align: center;
`;