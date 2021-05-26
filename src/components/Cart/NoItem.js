import CustomButton from "components/Shared/CustomButton";

import { Container } from "./NoItem.styles";

const NoItem = ({ closeCart }) => {
  return (
    <Container>
      <div className="no-item">
        <h4>No items in your cart</h4>
        <div>Your favourite items are just a click away</div>
      </div>
      <CustomButton
        title="Start Shopping"
        classes="shopping"
        onClick={closeCart}
      />
    </Container>
  );
};

export default NoItem;
