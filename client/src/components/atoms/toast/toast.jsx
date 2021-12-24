import React from 'react';
import { ToastContainer } from 'react-toastify';

function Toast(props) {
  const { position = 'top-center', autoClose = 1000, ...restProps } = props;
  return (
    <div>
      <ToastContainer
        position={position}
        autoClose={autoClose}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        {...restProps}
      />
    </div>
  );
}

export default Toast;
