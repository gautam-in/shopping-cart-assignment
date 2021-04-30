import React, { useRef } from "react";
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { alertActions } from "../../_actions";

const Alert = ({ type, children }) => {
    const [show, setShow] = useState(true);
    const dispatch = useDispatch();
    const errorRef = useRef(null);

    useEffect(() => {
        const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setShow(false);
            dispatch(alertActions.clear());
        }, 2000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);

    useEffect(() => {
        if (show) {
            errorRef.current.focus();
        }
    }, [show])

    return (
        show ?
            <div className={`alert ${type}`} tabIndex="-1" ref={errorRef}>
                {children}
            </div>
            :
            ""
    )
}

export default Alert;