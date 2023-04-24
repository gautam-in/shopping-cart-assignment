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
                <input
                    type={type} name={name} placeholder="no-label" id={name}
                    aria-describedby={name+"-error"}
                    {...field} {...rest} />
                <label htmlFor={name}>{label}</label>
            </div>
            {
                fieldState.invalid ? <div
                    className={styles.error} data-testid="input-error"
                    id={name+"-error"} role="alert" 
                >
                    <img aria-hidden="true" src="/static/images/error_icon.svg" />
                    <span>{fieldState?.error?.message}</span>
                </div> : null
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
