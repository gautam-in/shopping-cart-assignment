import styles from "./Button.module.scss";

const Button = ({ type, onClick, addClassName, children, ...restProps }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${addClassName ? addClassName : ""}`}
      type={type}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
