import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";
import { useController } from "react-hook-form";

function Input(props) {

    const {
        label,
        name,
        type,
        ...rest
    } = props;

    const { field, fieldState } = useController(props);

    return (
        <div className={`${styles.input} ${fieldState.invalid ? styles.invalid : ""}`}>
            <div className={styles.inputWrapper}>
                <input type={type} name={name} placeholder="no-label" {...field} {...rest} />
                <label>{label}</label>
            </div>
            {
                fieldState.invalid ? <div className={styles.error} data-testid="input-error">{fieldState?.error?.message}</div> : null
            }
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    errorMessage: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.oneOf(["text", "password"])
}

export { Input };
