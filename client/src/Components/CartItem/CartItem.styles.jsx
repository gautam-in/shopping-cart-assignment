import styled from 'styled-components';

export const CartItemContainer = styled.div`
    display: flex;
    padding: .5rem;
    margin: 0.5rem 0;
    background: #fff;
`;
export const CartItemImgContainer = styled.div`
    width: 4.5rem;
`;
export const CartItemImg = styled.img`
    max-width: 100%;
`;
export const CartItemMetaDataContainer = styled.div`
    flex:1;
    padding: 0 1rem;
`;
export const CartItemTitle = styled.h4`
    font-size: 1.2rem;
    font-weight: 800;

    @media only screen and (max-width: 600px) {
        font-size: .9rem;
        font-weight: 600;
    }
`;
export const CartItemQtyContainer = styled.div`
    display:flex;
    gap: 0.8rem;
`;
export const CartItemQtyUpdater = styled.button`
    font-size: 1.5rem;
    background: #bf2957;
    color: #fff;
    border-radius: 50%;
    width: 1.5rem;
    outline:none;
    border:none;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0.1rem;

    @media only screen and (max-width: 600px) {
        font-size: 1rem;
        width:1rem;
        height:1rem;
    }
`;
export const CartItemMetaData = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`;
export const CartItemQty = styled.h4`
    font-size:1.3rem;
    @media only screen and (max-width: 600px) {
            font-size: .9rem;
        }
`;
export const CartItemPriceContainer = styled.div`
    display: flex;
    flex-basis: 8rem;
    gap: 0.8rem;
    align-items: center;
`;
export const CartItemPrice = styled.h4`
    font-size:1.3rem;
    @media only screen and (max-width: 600px) {
            font-size: .9rem;
        }
`;
export const CartItemTotalPrice  = styled.h4`
    font-size:1.3rem;
    @media only screen and (max-width: 600px) {
            font-size: .9rem;
        }
`;