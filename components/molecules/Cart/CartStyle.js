import styled from 'styled-components'


const Container = styled.div`
    background-color: #eeeeee;
    display:flex;
    justify-content: center;
    text-align: center;
    /* margin-top:40px; */
    padding:3px;
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
    height:90vh;
    margin-left:auto;
    position:absolute;
    right:236px;
`;

const CartContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
`;

const CartExpandTop = styled.div`
    background:black;
    display:flex;
    justify-content: space-between;
    color:#fff;
    padding:10px;
    flex-grow:1;
    div{
        display:flex;
        span{
            font-size:12px;
            padding:3px;
        }
    }
`;

const CartExpandMiddle = styled.div`
    flex-grow:2;
`;

const CartExpandBottom = styled.div`

    flex-grow:1;
    margin-bottom:auto;

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