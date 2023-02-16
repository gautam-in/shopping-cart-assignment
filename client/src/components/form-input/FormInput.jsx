import styles from "./FormInput.module.scss";

export default function FormInput(props) {
  const {
    type = "text",
    id,
    name,
    placeholder,
    value,
    onChange,
    ...rest
  } = props;
  return (
    <div className={styles.formInputContainer}>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.formInput}
        {...rest}
      />
      <label
        htmlFor={id}
        className={
          value !== ""
            ? `${styles.formLabel} ${styles.active}`
            : `${styles.formLabel}`
        }
      >
        {placeholder}
      </label>
    </div>
  );
}
