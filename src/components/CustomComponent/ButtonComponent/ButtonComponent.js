import "./ButtonComponent.scss";
import Button from "react-bootstrap/Button";
const ButtonComponent = ({ children, ...otherProps }) => {
  return (
    <Button className="btn-primary" {...otherProps}>
      {children}
    </Button>
  );
};

export default ButtonComponent;