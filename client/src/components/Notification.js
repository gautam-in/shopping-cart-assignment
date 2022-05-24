import React from "react";

import { ToastContainer } from "react-toastify";

function Notification() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={1600}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="colored"
    ></ToastContainer>
  );
}

export default Notification;
