import "./Button.scss";

const Button = ({ children, className, handleClick, ...otherProps }) => {
  return (
    <button
      className={`${className} button-wrapper`}
      onClick={handleClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
