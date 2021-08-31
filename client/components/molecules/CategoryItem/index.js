import Image from "next/image";
import Button from "../../atoms/Button";
import styled from "styled-components";
import { sizes } from "../../../global/styles/sizes";

const CategoryItemWrapper = styled.li`
  display: grid;
  gap: 2rem;
  margin-bottom: 32px;
  padding: 32px 0;
  grid-template-columns: 1fr 2fr;
  background-color: white;
  position: relative;

  @media (max-width: ${sizes.mobileL}) {
    grid-template-columns: 1fr 1fr;
  }

  &:first-child {
    padding-top: 0;
  }

  &:nth-child(even) {
    grid-template-columns: 2fr 1fr;

    *:first-child {
      order: 2;
    }

    *:last-child {
      order: 1;
    }
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    border-radius: 50%;
    z-index: -1;
    box-shadow: 0 8px 10px -10px var(--dark-grey);
  }
`;

const CategoryItemDescription = styled.div`
  text-align: center;

  button {
    width: auto;
  }
`;

const CategoryItem = ({ categoryItem }) => {
  console.log(categoryItem);
  if (!categoryItem.imageUrl) return null;
  return (
    <CategoryItemWrapper>
      <Image
        src={categoryItem?.imageUrl}
        alt={categoryItem.name}
        height="125"
        width="200"
      />
      <CategoryItemDescription>
        <h2>{categoryItem.name}</h2>
        <p>{categoryItem.description}</p>
        <Button>Explore {categoryItem.name}</Button>
      </CategoryItemDescription>
    </CategoryItemWrapper>
  );
};

export default CategoryItem;
