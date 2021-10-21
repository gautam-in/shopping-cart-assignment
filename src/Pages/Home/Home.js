import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { fetchProductType } from '../../Redux/actions/product';
import { fetchCarauselItems } from '../../Redux/actions/carausel';

import Section from '../../Components/Section/Section';
import useProducts from '../../Hooks/useProducts';
import CartPage from '../Cart/Cart';
import Modal from '../../Components/Modal/Modal';
import Carausel from '../../Components/Carausel/Carausel'

const HomePageWrapper = styled.main`
    max-width: 75%;
    margin: auto;

    @media(max-width: 768px){
        max-width: 90%;
    }
`;
export default function HomePage() {
    const dispatch = useDispatch();
    const { filteredProductType, handleProduct } = useProducts();
    const openCart = useSelector((state) => state.cart.openCart);

    useEffect(() => {
        dispatch(fetchProductType());
        dispatch(fetchCarauselItems());
    }, [])

    return (
        <>
            <HomePageWrapper>
                <Carausel />
                {
                    (filteredProductType || []).map((item, index) => {
                        return <Section key={item.id} index={index} handleProduct={handleProduct} {...item} />
                    })
                }
            </HomePageWrapper>
            {openCart &&
                <Modal>
                    <CartPage header={true} />
                </Modal>
            }
        </>
    )
}
