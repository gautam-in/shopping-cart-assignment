import styled from "styled-components";


const CartItemStyle = styled.div`
    display: flex;
    padding: 0.5rem;
    height: 100px;
    background-color: var(--white);
    margin: 0.5rem 0;
    h4{
        margin: 0;
        font-size: 0.8em;
    }
    .counter-btn{
        padding: 0;
        /* margin: 0.25rem; */
        font-size: 1rem;
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
    .product-details{
        flex: 1;
        margin-left: 1.5rem;
        span{
        margin: 0 .75rem;
    }
    }
    .product-quantity-details{
        display: flex;
        align-items: center;
    }
    .product-quantity{
        flex: 1;
        /* margin-right: 0.5rem; */
    }
    
`;

export default CartItemStyle;