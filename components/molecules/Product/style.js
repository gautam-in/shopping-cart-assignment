import styled from 'styled-components'
import {device} from '../../../theme/device'

const ProductStyled = styled.div`
    display:flex;
    flex-direction:column;
    border-bottom: 1px solid black;
    width:25%;
    padding:3px;
    justify-content:flex-start;
    @media(max-width: 768px) {
      width: calc(100% / 2);
    }

    @media(max-width: 480px) {
      width: 100%;
    }


    /* @media ${device.tablate} {
        width: calc(100% / 2);
    }

    @media ${device.mobile} {
        width:100%;
    } */

    
`;

const TopSection = styled.div`
    h1{
        font-family: Calibri Bold;
    }
`;

const MiddleSection = styled.div`
    display:flex;
    flex-direction:column;
    @media(max-width: 480px) {
      flex-direction: row;
      width:100%;
    }
    @media(max-width: 768px) {
        flex-direction : row;
        width:100%
    }

`;

const ProductDesc = styled.div`
    background-color: #f0f0f0;
    p{
        text-align:center;
        padding:10px;
    }
`; 

const Price = styled.div`
    span{
        font-family: 'Calibri Bold';
    }
`

const Buy = styled.div`
    display:flex;
    flex-basis: 100%;
`;

// const BottomSection = styled.div`
//     display:flex;
//     flex-direction:row;
//     justify-content: space-between;
//     margin-top:4px;
// `;

const ProductRow = styled.div`
    display: flex;
    justify-content: space-evenly;
`;


const BottomSection = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding:4px;
    @media(max-width: 480px) {
      width: 100%;
      flex-direction:row;
      flex-basis: 100%;
    }

    @media(max-width: 768px) {
      width: 100%;
      flex-direction:row;
      flex-basis: 100%;
    }
`;

const ProductImage = styled.div`
    display:flex;
    img{
        width:100%;
    }
    @media(max-width: 480px) {
      flex-basis:50%;
      height:auto;
    }

    @media(max-width: 768px) {
      flex-basis:50%;
      height:auto;
      padding:8px;
    }
`;

const ProductDescription = styled.div`
    display:flex;
    flex-direction: column;
    padding-bottom: 8px;
    @media(max-width: 480px) {
      flex-basis:50%;
    }
    @media(max-width: 768px) {
      flex-basis:50%;
      padding:8px;
    }

`;

export {
    ProductStyled,
    TopSection,
    MiddleSection,
    BottomSection,
    Price,
    Buy,
    ProductDesc,
    ProductRow,
    ProductImage,
    ProductDescription
}