import styled from "styled-components";

const ProductStyles =styled.div`
    display:grid;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    padding:5px;
    img{
        margin:0 auto;
        height:80px;
    }
    .product-price {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items:center;
    }
    h2{        
        font-weight: 700;
        margin:0.5rem 0.5rem;
        height:35px;
    }
    .product-description {        
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4; /* number of lines to show */
        -webkit-box-orient: vertical;
        margin:12px 4px;
        background-color:#f2f5f4;
        align-items:center;
        min-height:60px;
    }
    button {
        border-radius:0;
    }
`;
export default ProductStyles;