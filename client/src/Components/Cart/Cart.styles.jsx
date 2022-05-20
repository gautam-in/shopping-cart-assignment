import styled from "styled-components";
import { AppButton } from "../Buttons/Buttons.styles";

export const CartContainerComponent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 99vw;
    height: 100vh;
    z-index: 10;
    background: rgb(0 0 0 / 46%);
    overflow: hidden;
`;

export const CartComponent = styled.div`
    width: 28rem;
    background: #fff;
    height: 48rem;
    position: absolute;
    top: 6.5rem;
    right: 10.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CartHeader = styled.div`
    background: #1d2124;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
`;
export const CartHeaderTitleContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: baseline;
`;
export const CartTitle = styled.h4`
    font-size: 1.5rem;
    font-weight: 600;
`;
export const CartHeaderItems = styled.div``;
export const CartHeaderCloseBtnContainer = styled.div`
    font-size: 1.4rem;
`;
export const CartHeaderCloseBtn = styled.div``;
export const CartItemsContainer = styled.div`
    flex-basis: 80%;
    background: #efefef;
    overflow-y: scroll;
`;
export const CartItemsPlaceholder = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    background: #fffd;
    margin: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
`;
export const CartItemsPlaceholderImageContainer = styled.div``;
export const CartPlaceholderItemsImage = styled.img``;
export const CartItemsPlaceholderText = styled.div``;
export const CartCheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.7rem;
`;
export const CartCheckoutText = styled.h5`
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
`;
export const CartCheckoutButton = styled(AppButton)`
    width:100%;
    border-radius:5px;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    font-family:inherit;
    font-size:1.1rem;
`;
export const CartCheckoutButtonText = styled.h4`

`;
export const CartCheckoutButtonPrice = styled.p`
    display: flex;
    gap: 1rem;
`;