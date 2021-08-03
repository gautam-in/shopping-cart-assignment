import styled from "styled-components";
import Link from "next/link";

const StyledCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin: 2rem 0;
  padding: 2rem 0;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  &:nth-child(odd) .categoryContent {
    order: -1;
  }
`;

const CategoryImg = styled.img`
  width: 30%;
  height: auto;
  padding: 0 2.5%;
`;

const Content = styled.div`
  text-align: center;
  width: 70%;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  line-height: 1;
`;

const Description = styled.p`
  margin: 30px 0;
  font-size: 1rem;
`;

const Button = styled.a`
  padding: 12px 25px;
  background: var(--colorPrimary);
  color: #fff;
  display: inline-block;
`;

export default function Category({
  name,
  description,
  imageUrl,
  categoryKey,
  id,
}) {
  return (
    <StyledCategory>
      <CategoryImg src={imageUrl} />
      <Content className="categoryContent">
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Link href={`/products/${id}`} passHref>
          <Button>{`Explore ${categoryKey}`}</Button>
        </Link>
      </Content>
    </StyledCategory>
  );
}
