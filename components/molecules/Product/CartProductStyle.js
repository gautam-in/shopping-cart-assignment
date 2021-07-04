import styled from 'styled-components'


const Container = styled.div`
    background:#fff;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    padding:3px;
    margin:5px;
`;


const LeftSection = styled.div`
    flex-grow:1;
    img{
        width:60px;
        padding:5px;
        display:flex;
    }
`;

const MiddleSection = styled.div`
    display:flex;
    flex-direction:column;
    flex-grow:3;
    
    div{
        display:flex;
        justify-content: space-around;
        margin-top:-10px;
        h5{
            font-size:11px;
        }
    }
`;

const Price = styled.span`
    font-family: 'Arial Narrow Bold';
    font-size:12px;
`;

const RightSection = styled.div`
    display:flex;
    flex-direction:column-reverse;
    font-size:12px;
    flex-grow:1;
    font-weight: 150px;
`;
export {
    Container,LeftSection,MiddleSection,RightSection,Price
}