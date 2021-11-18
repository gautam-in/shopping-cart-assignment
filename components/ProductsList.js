import styled from "styled-components";
import ProductCard from "./ProductCard";



const CardContainerStyles = styled.div`
display: flex;
flex-wrap: wrap;
margin-left: 200px;
justify-content: flex-start;



@media screen and (max-width:800px){
  margin:2rem;
}


`

export default function ProductsList({ products }) {
  // console.log(products);

  if (!products) {
    return <p>no Products....</p>;
  }

  return (
    <CardContainerStyles>
      {products.map((product,idx) => {
        return <ProductCard key={idx} product = {product} />;
      })}
    </CardContainerStyles>
  );
}
