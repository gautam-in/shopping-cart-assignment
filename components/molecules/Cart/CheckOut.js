import styled from 'styled-components'

const Container = styled.div`
    background:#fff;
    padding:5px;
    span{
        font-family: 'Arial Narrow Bold';
        font-size:12px;
        display:flex;
        justify-content:center;
        padding:5px;
    }
    div{
        display:flex;
        justify-content: space-between;
        padding:10px;
        background:#bf2957;
        a{
            color:#fff;
            text-decoration: none;
            font-family: 'Arial Narrow Bold';
            font-size:14px;
        }
        span{
            font-family: 'Arial Narrow Bold';
            font-size:10px;
            color:#fff;
        }
    }
`;

function CheckOut(){
    return (
        <Container>
            <span>Promo code can be applyied on payment page</span>
            <div>
                <a>Proceed to checkout</a>
                <span>Rs.187</span>
            </div>
        </Container>
    )
}


export default CheckOut