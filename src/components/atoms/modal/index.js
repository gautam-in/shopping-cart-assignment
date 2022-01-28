import React from 'react';
import { func, bool, any } from 'prop-types';

import './modal.scss';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <div className='button-wrapper'><button type="button" onClick={handleClose}>
                    OK
                </button></div>
            </section>
        </div>
    );
};

Modal.propTypes = {
    handleClose: func.isRequired,
    show: bool.isRequired,
    children: any
}

export default Modal;