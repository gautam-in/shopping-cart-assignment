import { memo } from "react";
import { Container } from "./LeftCard.styles";

const LeftCard = ({ title, description }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <div>{description}</div>
    </Container>
  );
};

export default memo(LeftCard);
