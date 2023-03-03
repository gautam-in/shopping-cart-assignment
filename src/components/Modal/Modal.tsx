import React from "react";
import './Modal.css'

const Modal: React.FC<{children:any, setShowModal:Function}>=({children, setShowModal})=>{
    return(
        <div className="modal">
            <div className="modal-content bg-gray-200">
                <span className="close relative" onClick={()=>setShowModal(false)}>&times;</span>
                {children}
            </div>
        </div>
    )
};

export default Modal;