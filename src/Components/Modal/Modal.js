import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../Redux/actions/cart';
import { countTotalItems } from '../../Helpers/cartPrice';

const ModalWrapper = styled.div`
    position: fixed; 
    z-index: 1;
    padding-top: 100px; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.7); 
`;

const ModalContent = styled.div`
    width: 35vw;
    height: 80vh;
    z-index: 99;
    background: white;
    position: fixed;
    bottom: 0%;
    left: 64%;
`;

const ModalHeader = styled.div`
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    background: black;
    color: white;
`;
const ModalTitle = styled.div`
    padding: 0.3rem 0.3rem;
    font-size: .9rem;
    color: #fff;
`;
const ModalCloseButton = styled.span`
    padding: 0.3rem 0.3rem;
    font-size: .9rem;
    color: #fff;
    cursor: pointer;
`;

export default function Modal({children}){

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalItems = countTotalItems(cartItems);

    return(
        <ModalWrapper data-testid='modal'> 
            <ModalContent>
                <ModalHeader>
                    <ModalTitle>{` My Cart(${totalItems}) items)`} </ModalTitle>
                    <ModalCloseButton onClick={()=> dispatch(toggleCart(false))}>X</ModalCloseButton>
                </ModalHeader>
                {children}
            </ModalContent>
        </ModalWrapper>
    )
}