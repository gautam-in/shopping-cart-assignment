import styled from "styled-components";

const ProductsStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,auto));
    .nav-container{
        width:250px;
    }
    .list-container{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
        align-items: center;
        grid-gap: 24px;
        width: 100%;
    }
`;
export default ProductsStyles;