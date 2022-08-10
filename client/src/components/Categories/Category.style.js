import styled from "styled-components";

export const CategorySection = styled.div`
  .category-info {
    display: flex;
    align-items: center;
    .image {
        flex:1 0 200px;
        img{
            max-width:200px;
            max-height:200px;
        }
    }
    .category-desc{
        flex:1 0 auto;
        text-align:center;
    }
  }
`;

export const Seperator = styled.img`    
    max-width: 1000px;
`