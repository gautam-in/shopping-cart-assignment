import React from "react";
import styles from "./Button.module.scss";

export function Button(props) {

    const { children, className, size, ...rest } = props;

    return (
        <button className={styles.button + " " + (styles[size] || "default") + " " + (className || "")} {...rest}>
            {children}
        </button>
    );
}
