import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Toast.scss';
import { useDispatch } from 'react-redux';
import { removeMessage } from '@store/toastReducer';

export function Toast(props) {
    const { toastList, position, autoDelete, autoDeleteTime } = props;
    const [list, setList] = useState(toastList);
    const dispatch = useDispatch();

    useEffect(() => {
        setList([...toastList]);
    }, [toastList]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoDelete && toastList.length && list.length) {
                deleteToast(toastList[0].id);
            }
        }, autoDeleteTime);
        
        return () => {
            clearInterval(interval);
        }

        // eslint-disable-next-line
    }, [toastList, autoDelete, autoDeleteTime, list]);

    const deleteToast = id => {
        dispatch(removeMessage({
            id
        }));
    };

    return (
        <>
            <div className={`notification-container ${position}`}>
                {
                    list.map((toast, i) =>     
                        <div 
                            key={i}
                            className={`notification toast ${position}`}
                            style={{ borderColor: toast.backgroundColor }}
                        >
                            <button onClick={() => deleteToast(toast.id)}>
                                ✕
                            </button>
                            <div className="notification-image">
                                <img src={`/static/images/${toast.icon}`} alt="" />
                            </div>
                            <div>
                                <p className="notification-title">{toast.title}</p>
                                <p className="notification-message">
                                    {toast.message}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

Toast.propTypes = {
    toastList: PropTypes.array.isRequired,
    position: PropTypes.string.isRequired,
    autoDelete: PropTypes.bool,
    autoDeleteTime: PropTypes.number
}

export default Toast;
