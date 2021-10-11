import styled from 'styled-components';

const ProductCardStyle = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 300px;
/* height: 350px; */
margin: 10px;
padding: 10px;

div {
  display: flex;
  flex-direction: column;
  align-self: auto;
}

img {
  width: 250px;
  height: 200px;
}

&:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

`;

export default ProductCardStyle;