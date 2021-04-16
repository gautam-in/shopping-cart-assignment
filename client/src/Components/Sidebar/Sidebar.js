import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";
import "./Sidebar.scss";

const Sidebar = ({ categories }) => {
    const showModal = useSelector(state => state.cart.showModal);
    return (
        <aside className="sidebar" aria-label="sidebar with categories list to show to product for selected category" tabIndex={showModal ? -1 : "7"}>
            {
                categories.length ?
                    categories.map((item, index) => {
                        return (<Link key={item.id} tabIndex={showModal ? -1 : 8 + index} className={item.enabled ? "selected-item" : ""} to={item.enabled ? routes.products : routes.productById.replace(":id", item.id)} aria-label={"sidebar link for category" + item.name} >{item.name}</Link>)
                    }) : ""
            }
        </aside>
    )
}

export default Sidebar;