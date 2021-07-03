import styled from 'styled-components'

const ProductStyled = styled.div`
    display:flex;
    flex-direction:column;
    border-bottom: 1px solid black;
    width:20.333%;
    padding:3px;
    justify-content:space-evenly;
`;

const TopSection = styled.div`
    h1{
        font-family: Calibri Bold;
    }
`;

const MiddleSection = styled.div`
    display:flex;
    flex-direction:column;
`;

const ProductDesc = styled.div`
    background-color: #f0f0f0;
    p{
        text-align:justify;
        padding:10px;
    }
`; 

const Price = styled.div`
    span{
        font-family: 'Calibri Bold';
    }
`

const Buy = styled.div``;

const BottomSection = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    margin-top:4px;
`;

const ProductRow = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
export {
    ProductStyled,
    TopSection,
    MiddleSection,
    BottomSection,
    Price,
    Buy,
    ProductDesc,
    ProductRow
}