import { useDispatch, useSelector } from "react-redux";
import { setOverflowHidden } from "../redux/slices/home";

const useOverflowHidden = () => {
    const overflowHidden = useSelector((state) => state.home.overflowHidden);
    const dispatch = useDispatch();

    const toggleOverflowHide = () => {
        document.body.classList.toggle('overflow-hide');
        dispatch(setOverflowHidden(!overflowHidden));
    }    

    return {overflowHidden,toggleOverflowHide};
};

export default useOverflowHidden;