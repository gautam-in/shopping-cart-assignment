import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Alert extends Component {
    render() {
        return (
            <ToastContainer
                pauseOnHover
                draggable
                closeOnClick
                autoClose={3000}
                position='bottom-center'
            />
        )
    };
};
export default Alert;