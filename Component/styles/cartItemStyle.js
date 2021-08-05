import styled from "styled-components";

export const ProductDetail = styled.div`
  flex: 1;
  margin-left: 1.5rem;
  span {
    margin: 0 0.75rem;
  }
`;
export const ProductQuantityDetail = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductQuantity = styled.div`
  flex: 1;
`;
export const CartItemStyle = styled.div`
  display: flex;
  padding: 0.5rem;
  height: 100px;
  background-color: var(--white);
  margin: 0.5rem 0;
  h1 {
    margin: 0;
    font-size: 1em;
  }
  .counter-btn {
    padding: 0;
    font-size: 1rem;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    span {
      fontsize: 1.5rem;
    }
   
    }
    @media only screen and (max-width: 1023px) {
        .counter-btn {
           
            border-radius: 20%;
             }
      }
  }
`;
