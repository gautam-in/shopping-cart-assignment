import PropTypes from "prop-types";
export const FilledCart = ({ cartItems }) => {
  return (
    <>
      {cartItems.map(({ name }) => {
        <div>{name}</div>;
      })}
    </>
  );
};

FilledCart.propTypes = {
  cartItems: PropTypes.array,
};
