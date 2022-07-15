import React, { useState } from "react";
import './Alert.scss'

export default function Alert({ children, variant, message }) {
    const [isShow, setIsShow] = useState(true);

    const renderElAlert = function () {
        return React.cloneElement(children);
    };

    const handleClose = (e) => {
        e.preventDefault();
        setIsShow(false);
    };

    return (
        <div className={`alert ${variant} ${(!isShow && "hide")}`}>
            <span className={'closebtn'} onClick={handleClose}>
                &times;
            </span>
            {children ? renderElAlert() : message}
        </div>
    );
}