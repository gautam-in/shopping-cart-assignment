import React from 'react';
import { useRef } from 'react';
import './Toast.scss';

const Toast = props => {
    const { position, description, title, onClose,show} = props;
    const toastRef = useRef();

    if(show){
        setTimeout(()=>{
            onClose();
        },5000)
    }

    return (
        <>
            <section role="alert"  className={show ? `notification-container ${position} ${title}` : 'notification-close'}>
                <div className={`notification toast ${position}`}>
                    <div ref={toastRef} className="notification-heading">
                        <h4 className="notification-title">{title}</h4>
                        <button data-testid="toast-close-btn" onClick={onClose}>X</button>
                    </div>
                    <p className="notification-message">
                        {description}
                    </p>
                </div>
            </section>
        </>
    );
}

export default Toast;