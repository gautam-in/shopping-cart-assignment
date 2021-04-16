import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";
import "./Sidebar.scss";

const Sidebar = ({ categories }) => {
    return (
        <aside className="sidebar" aria-label="sidebar with categories list to show to product for selected category" tabIndex="7">
            {
                categories.length ?
                    categories.map((item, index) => {
                        return (<Link key={item.id} tabIndex={8 + index} className={item.enabled ? "selected-item" : ""} to={item.enabled ? routes.products : routes.productById.replace(":id", item.id)} aria-label={"sidebar link for category" + item.name} >{item.name}</Link>)
                    }) : ""
            }
        </aside>
    )
}

export default Sidebar;