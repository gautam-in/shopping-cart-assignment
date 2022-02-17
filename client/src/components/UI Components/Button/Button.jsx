import classes from "./Button.module.css";

const Button = ({ children, className, handleClick, ...otherProps }) => {
  return (
    <button
      className={`${className} ${classes.button__wrapper}`}
      onClick={handleClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
