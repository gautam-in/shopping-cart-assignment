import React, { useState } from "react";

import styles from "./FloatingLabel.module.css";

const FloatingLabel = props => {
    const [focus, setFocus] = useState(false);
    const { children, label, value } = props;

    const labelClass =
        focus || (value && value.length !== 0) ? "label label-float" : "label";

    return (
        <div
            className={styles["float-label"]}
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
        >
            {children}
            <label className={styles[labelClass]}>{label}</label>
        </div>
    );
};

export default FloatingLabel;
