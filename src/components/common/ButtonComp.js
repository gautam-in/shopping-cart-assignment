import './buttun.style.scss'
const ButtonComp = ({ children, buttonType, ...otherProps }) => {
    return (
      <button
        className={`button-container`}
        {...otherProps}
      >
        {children}
      </button>
    );
  };
  export default ButtonComp