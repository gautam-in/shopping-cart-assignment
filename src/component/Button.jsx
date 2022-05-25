import "../styles/button.scss";

const BUTTON_TYPE_CLASSES = {
  max: "max",
  buy: "buy",
  checkout: "checkout",
};
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
