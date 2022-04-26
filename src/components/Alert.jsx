import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import {alertDismissTime} from '../utils/constants';
import 'react-toastify/dist/ReactToastify.css';

class Alert extends Component {
    render() {
        return (
            <ToastContainer
                pauseOnHover
                draggable
                closeOnClick
                autoClose={alertDismissTime}
                position='bottom-center'
            />
        )
    };
};
export default Alert;