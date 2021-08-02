import { toast } from 'react-toastify';
export const notify = (status, message) => {
    toast.dismiss();
    if (status) {
      toast.success(message, {})
    } else {
      toast.error(message, {})
    }
};
