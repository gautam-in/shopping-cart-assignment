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

    @media only screen and (max-width: 600px) {
        padding:0;
    }

    @media only screen and (max-width: 700px) {
        padding:.2rem;
        margin:.5rem;
    }
`;
export const ProductHeaderContainer = styled.div`
    height: 4rem;

    @media only screen and (max-width: 600px) {
        height: 3.5rem;
    }
`;
export const ProductHeader = styled.h4`
    font-size: 1.5rem;

    @media only screen and (max-width: 600px) {
        font-size: 1rem;
    }
`;
export const ProductImgContainer = styled.div`
    grid-row: 1/2;
    grid-column: 1/-1;
    width:12rem;

    @media only screen and (max-width: 600px) {
        grid-row: 1/-1;
        grid-column: 1/2;
        width: 9rem;
        align-self: center;
    }

    @media only screen and (max-width: 768px) {
        grid-row: 1/-1;
        grid-column: 1/2;
        width: 7rem;
        align-self: auto;
    }
`;
export const ProductImg = styled.img`
    max-width:100%;
`;
export const ProductDescContainer = styled.div`
    padding: 0.6rem;
    background: #ccc;
    margin-bottom: 1rem;
    grid-row: 2/3;
    grid-column: 1/-1;

    @media only screen and (max-width: 768px) {
        grid-row: 1/2;
        grid-column: 2/-1;
    }
`;
export const ProductDesc = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;  
    overflow: hidden;

    @media only screen and (max-width: 600px) {
        font-size: .8rem;
    }

`;
export const ProductMetaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: stretch;
    align-items: center;
    grid-row: 3/-1;
    grid-column: 1/-1;

    @media only screen and (max-width: 768px) {
        grid-row: 2/-1;
        grid-column: 1/-1;
    }

    @media only screen and (max-width: 600px) {
        grid-row: 2/3;
        grid-column: 2/-1;
    }
`;
export const ProductPrice = styled.div`
    font-weight:600;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;
export const ProductCTA = styled(AppButton)`
    font-family:inherit;
    font-size: 1.3rem;
    @media only screen and (max-width: 768px) {
        width:100%;
        font-size: .8rem;
    }
`;


export const ProductMetaDataContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 7rem;
    grid-template-columns: repeat(2,1fr);

    @media only screen and (max-width: 768px) {
        grid-template-rows: 1fr 4rem;
    }
`;

export const ProductMobilePrice = styled.span`
    display:none;
    font-family:inherit;

    @media only screen and (max-width: 768px) {
        display: inline-block;
    }
`;