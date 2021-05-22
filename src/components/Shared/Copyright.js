import { memo } from "react";
import { Container } from "./Copyright.styles";

const Copyright = () => {
  return (
    <Container>
      Copyright &#169; 2011-2018 Sabka Bazar Grocery Suppplies Pvt Ltd
    </Container>
  );
};

export default memo(Copyright);
