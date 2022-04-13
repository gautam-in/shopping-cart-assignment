import styles from "./Input.module.scss";

const Input = ({ label, id, ...inputOptions }) => { 
  return (
    <div className={styles["input"]}>
      <input
        {...inputOptions}
        id={id}
      />
      <label className={inputOptions.value.length > 0 ? styles["label-active"] : ''} htmlFor={id} >{label}</label>
    </div>
  );
};

export default Input;
