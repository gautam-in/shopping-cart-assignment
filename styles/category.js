import styled from "styled-components";

const CategoryStyles =styled.div`
    display:grid;
    grid-template-columns:35% auto;
    box-shadow: 0px 15px 10px -15px #111;
    padding:5px;
    img {
        width:100px;
        height:100px;
    }
    .category-img{
        margin: 0 auto;
    }
    .category-details{
        text-align:center;
        font-family:sans-serif;
        h5{
            margin:0;
        }
        p{
            font-family:monospace;
        }
    }
    button {
        text-transform:none;
        border-radius:0;
    }
`;
export default CategoryStyles;