import "./button.scss";

const Button = ({ children, className, ...other }) => (
  <button {...other} className={`button ${className ?? ""}`}>
    {children}
  </button>
);

export default Button;
