import React from "react";
import './LoginMessage.scss'

export default function LoginMessage({clicked,setClicked}) {
    console.log("clicked")

    const closeModal=()=>{
        setClicked(false)
    }
    return (
        <div className={clicked? "login-modal-open": "login-modal-close"}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <p>   Please Login to Shop</p>
            </div>
        </div>
    )
}