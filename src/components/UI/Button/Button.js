import "./Button.scss";
import Button from "react-bootstrap/Button";
const BButton = ({ children, ...otherProps }) => {
  return (
    <Button className=" btn-primary" {...otherProps}>
      {children}
    </Button>
  );
};

export default BButton;
