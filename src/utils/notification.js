import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Notification = (type, message, position) => {

    toast(`${message}`, {
        type: type,
        position: position,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
};
