import styled from 'styled-components'


const Container = styled.div`
    display:flex;
    justify-content: flex-start;
    flex-basis:100%;
    margin-top:12px;
    background-color: ${( {theme: { colors: {white} } })=>white};
    
    @media(max-width: 480px) {
        display:flex;
        justify-content: flex-start;
        flex-basis:100%;
        margin-top:12px;
        background-color: ${( {theme: { colors: {white} } })=>white};
    }
    
    @media(max-width: 768px) {
        display:flex;
        justify-content: flex-start;
        flex-basis:100%;
        margin-top:12px;
        background-color: ${( {theme: { colors: {white} } })=>white};
    }
`;

const LeftSection = styled.div`
    display:flex;
    flex-basis:20%;
    padding:4px;
    
    @media(max-width: 768px) {
        display:flex;
        padding:4px;
        flex-basis:12%;
    }

    @media(max-width: 480px) {
        display:flex;
        flex-basis:20%;
        padding:4px;
    }

    
`;

const RightSection = styled.div`
    display:flex;
    flex-basis:80%; 
    flex-direction:column;
    justify-content: center;
    align-item:center;
    @media(max-width: 480px) {
        display:flex;
        flex-basis:80%; 
        flex-direction:column;
        justify-content: flex-start;
    }
    @media(max-width: 768px) {
        display:flex;
        flex-basis:88%; 
        flex-direction:column;
        justify-content: flex-start;
    }
`;

const ProductInfo = styled.div`
 
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    
    @media(max-width: 480px) {
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
    }
    @media(max-width: 768px) {
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
    }
`;

const ProductHeading = styled.div`
    display:flex;
    font-family: ${({theme:{themeFont}})=>themeFont.family};
    font-weight:800;
    padding-top:0px;
    padding-bottom:6px;
    @media(max-width: 480px) {
        display:flex;
        font-family: ${({theme:{themeFont}})=>themeFont.family};
        font-weight:600;
        padding-top:4px;
        padding-bottom:0px;
    }
    @media(max-width: 768px) {
        display:flex;
        padding-top:12px;
        padding-bottom:4px;
        font-family: ${({theme:{themeFont}})=>themeFont.family};
    }
`;

const ProductActions = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    @media(max-width: 480px) {
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
    }
    @media(max-width: 768px) {
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
    }
`;




const Price = styled.div`
    font-family: ${({theme:{themeFont}})=>themeFont.family};
    font-size:12px;
    padding:4px;
    font-weight:600;
    @media(max-width: 480px) {
        font-family: ${({theme:{themeFont}})=>themeFont.family};
        font-size:16px;
        padding:8px;
        font-weight:800;
    }
    @media(max-width: 768px) {
        font-family: ${({theme:{themeFont}})=>themeFont.family};
        font-size:16px;
        padding:8px;
        font-weight:800;
    }
`;

const PriceRight = styled.div`
    font-family: ${({theme:{themeFont}})=>themeFont.family};
    font-size:12px;
    padding:4px;
    font-weight:600;
    margin-left:auto;

    @media(max-width: 480px) {
        font-family: ${({theme:{themeFont}})=>themeFont.family};
        font-size:16px;
        padding:8px;
        font-weight:800;
        margin-left:auto;
    }

    @media(max-width: 768px) {
        font-family: ${({theme:{themeFont}})=>themeFont.family};
        font-size:16px;
        padding:8px;
        font-weight:800;
        margin-left:auto;
    }
`;


const ProductQuantity = styled.div`
    font-family: ${({theme:{themeFont}})=>themeFont.family};
    display:flex;
    padding:4px;
    font-weight:200;

    @media(max-width: 480px) {
        font-family: ${({theme:{themeFont}})=>themeFont.family};
        display:flex;
        padding:8px;
        font-weight:800;
    }

    @media(max-width: 768px) {
        font-family: ${({theme:{themeFont}})=>themeFont.family};
        display:flex;
        padding:8px;
        font-weight:800;
    }
`;

const ProductPlus = styled.div`
    display:flex;
    padding-left:4px;
    cursor:pointer;
    
    @media(max-width: 480px) {
        display:flex;
        padding:4px;
        cursor:pointer;
    }

    @media(max-width: 768px) {
        display:flex;
        padding:4px;
        cursor:pointer;
    }
`;

const ProductMinus = styled.div`
    display:flex;
    padding-left:4px;
    cursor:pointer;
    @media(max-width: 480px) {
        display:flex;
        padding:4px;
        cursor:pointer;
    }

    @media(max-width: 768px) {
        display:flex;
        padding:4px;
        cursor:pointer;
    }
`;

export {
    Container,LeftSection,RightSection,Price,ProductQuantity,
    ProductInfo,ProductHeading,ProductActions,PriceRight,ProductPlus,ProductMinus
}