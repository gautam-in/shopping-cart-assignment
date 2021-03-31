import styled from "styled-components";

const CategoryStyles =styled.div`
    display:flex;
    flex-direction:${props => props.flexDirection};
    box-shadow: 0px 15px 10px -15px #111;
    padding:5px;
    text-align:center;
    img {
        width:100px;
        height:100px;
    }
    .category-img{
        flex:0 0 35%;
    }
    .category-details{
        flex:1 1 auto;
        h5{
            margin:0;
        }
    }
    button {
        text-transform:none;
        border-radius:0;
    }
`;
export default CategoryStyles;