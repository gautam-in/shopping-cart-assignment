import Image from "next/image";
import styled from "styled-components";
import Button from "../../atoms/Button";

const ProductItemWrapper = styled.li`
  padding: 16px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 4px var(--light-grey);
`;

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    padding: 8px;
    background-color: var(--light-grey);
  }
`;
const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > * {
    flex: 1 1 0px;
    margin: 0;
  }
`;

const ProductItem = ({ productItem }) => {
  if (!productItem.imageURL) return null;
  return (
    <ProductItemWrapper>
      <ProductDescription>
        <h2>{productItem.name}</h2>
        <Image
          src={productItem?.imageURL}
          alt={productItem.name}
          height="200"
          width="150"
        />
        <p>{productItem.description}</p>
      </ProductDescription>
      <PriceSection>
        <p>MRP Rs.{productItem.price}</p>
        <Button>Buy now</Button>
      </PriceSection>
    </ProductItemWrapper>
  );
};

export default ProductItem;
