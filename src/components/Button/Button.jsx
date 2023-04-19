import React from "react";
import styles from "./Button.module.scss";

export function Button(props) {

    const { children, className, ...rest } = props;

    return (
        <button className={styles.button + " " + (className || "")} {...rest}>
            {children}
        </button>
    );
}