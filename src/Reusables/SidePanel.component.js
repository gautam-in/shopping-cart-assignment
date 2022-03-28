import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../store/action.js";
import "../Scss/sidepanel.scss";


function SidePanel({ product }) {
    const { filter } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handlePanel = (ctgId) => () => {
        if (ctgId !== filter) {
            dispatch(setFilter(ctgId));
        } else {
            dispatch(setFilter(null));
        }
    };


    return (
        
        <aside className="sidepanel-category">
            <ul className="side-panel-list">
                {product.length ? product.map((pro) => pro.enabled && (
                    <li
                        key={pro.id}
                        id = {pro.id !== filter ? "inactive" : "active"}
                        onClick={handlePanel(pro.id)}
                    >
                        {pro.name}
                    </li>
                )) : null}
            </ul>
        </aside>           
    );

}

export default SidePanel;