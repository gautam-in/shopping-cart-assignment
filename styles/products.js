import styled from "styled-components";

const ProductsStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    .nav-container{
        width:250px;
    }
    .list-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: center;
        grid-gap: 24px;
        width: 100%;
    }
`;
export default ProductsStyles;