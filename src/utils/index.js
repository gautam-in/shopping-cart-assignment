import {toast} from 'react-toastify';

export const handleActiveLinkStatus = ({isActive}) => ({
    color: isActive ? '#D10057' : ''
});

export const handleError = (error) => {
    toast.error(error.message);
    console.error(error);
};