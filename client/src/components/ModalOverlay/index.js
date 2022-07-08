import React, { useState } from "react";
import  ReactDOM  from "react-dom";

function createWrapperAndAppendToBody(wrapperId) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
  }

export const ModalOverlay=(props)=>{
    const [divElement,setDivElement]=useState(null);
    React.useEffect(()=>{
        let element=document.getElementById('modal-overlay');
        if(!element){
            element=createWrapperAndAppendToBody('modal-overlay');
        }
        setDivElement(element);
        return ()=>{
            if(element){
                document.body.removeChild(element);
            }
        }
    },[])
    if(!divElement)return null;
    return ReactDOM.createPortal(props.children,divElement);
}