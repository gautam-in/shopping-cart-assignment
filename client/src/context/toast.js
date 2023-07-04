import { createPortal } from "react-dom";
import React, { createContext, useState, useContext } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (message, timeout = 3000) => {
    setToastMessage(message);

    const t = setTimeout(() => {
      hideToast();
      clearTimeout(t);
    }, timeout);
  };

  const hideToast = () => {
    setToastMessage("");
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {toastMessage
        ? createPortal(
            <div className={"toast"} role="alert" aria-live="polite">
              <p>{toastMessage}</p>
            </div>,
            document.body
          )
        : ""}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const { showToast, hideToast } = useContext(ToastContext);
  return { showToast, hideToast };
};
