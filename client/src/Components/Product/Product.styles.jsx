import styled from 'styled-components';
import {AppButton} from '../Buttons/Buttons.styles';

export const ProductContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ProductHeader = styled.h4`
    font-size: 1.5rem;
`;
export const ProductImgContainer = styled.div`
    width:15rem;
`;
export const ProductImg = styled.img`
    max-width:100%;
`;
export const ProductDescContainer = styled.div`
    padding: 0.6rem;
    background: #ccc;
`;
export const ProductDesc = styled.p``;
export const ProductMetaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: stretch;
`;
export const ProductPrice = styled.div``;
export const ProductCTA = styled(AppButton)``;