import styled from 'styled-components'


const Container = styled.div`
    background-color: #eeeeee;
    display:flex;
    justify-content: center;
    text-align: center;
    /* margin-top:40px; */
    padding:3px;
    cursor:pointer;
`;

const Count = styled.span`
    font-family: "Rockwell Regular";
    /* padding-top:15px; */
    /* padding-left:10px; */
    padding-right:10px;
`;

const CartExpand = styled.div`
    z-index:999;
    background:#f0f0f0;
    width:300px;
    height:520px;
    margin-left:auto;
    position:absolute;
    right:0;
    top:92px;
    display:flex;
    flex-direction: column;
`;

const CartContainer = styled.div`
    display:flex;
    flex-flow:column wrap;
    flex-basis:100%;
    justify-content:flex-start;
`;

const CartExpandTop = styled.div`
    flex-basis:10%;
    background:black;
    display:flex;
    justify-content: space-between;
    color:#fff;
    padding:10px;
    div{
        display:flex;
        span{
            font-size:12px;
            padding:3px;
        }
    }
`;

const CartExpandMiddle = styled.div`
    flex-basis:75%;
`;

const CartExpandBottom = styled.div`
    display:flex;
    flex-direction:column;
    flex-basis:10%;
`; 



export {
    Container,
    Count,
    CartExpand,
    CartContainer,
    CartExpandTop,
    CartExpandMiddle,
    CartExpandBottom
}