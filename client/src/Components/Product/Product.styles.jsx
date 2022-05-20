import styled from 'styled-components';
import {AppButton} from '../Buttons/Buttons.styles';

export const ProductContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px dotted #ccc;
    margin: 1rem;
`;
export const ProductHeaderContainer = styled.div`
    height: 4rem;
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
    margin-bottom: 1rem;
`;
export const ProductDesc = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;  
    overflow: hidden;

`;
export const ProductMetaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: stretch;
    align-items: center;
`;
export const ProductPrice = styled.div`
    font-weight:600;
`;
export const ProductCTA = styled(AppButton)``;