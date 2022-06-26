import { useDispatch, useSelector } from "react-redux";
import { setIsHamMenuOpen } from "../redux/slices/home";

const useToggleHamMenu = () => {
    const isHamMenuOpen = useSelector((state) => state.home.isHamMenuOpen);
    const dispatch = useDispatch();
    const toggleHamMenu = () => {
        dispatch(setIsHamMenuOpen(!isHamMenuOpen));
    }

    return {isHamMenuOpen,toggleHamMenu};
};

export default useToggleHamMenu;