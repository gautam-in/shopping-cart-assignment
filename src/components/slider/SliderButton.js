import styles from "./SliderButton.module.scss";

const SliderButton = ({ type, onClick, children }) => {
  return (
    <div
      className={`${styles["slidebutton"]} ${styles[type]}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default SliderButton;
