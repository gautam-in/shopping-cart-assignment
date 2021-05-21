import { memo } from "react";
import { Container } from "./LeftCard.styles";

const LeftCard = ({ title, description }) => {
  return (
    <Container>
      <h4>{title}</h4>
      <div>{description}</div>
    </Container>
  );
};

export default memo(LeftCard);
