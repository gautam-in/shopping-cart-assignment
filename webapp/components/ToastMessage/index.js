import {message}  from "antd";

export const ToastMessage = (type, config) => {
    message[type](config)
}