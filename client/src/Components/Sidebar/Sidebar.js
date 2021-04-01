import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";
import "./Sidebar.scss";

const Sidebar = ({ categories }) => {
    return (
        <div className="sidebar" aria-label="sidebar with categories list">
            {
                categories.length ?
                    categories.map(item => {
                        return (<Link key={item.id} to={item.enabled ? routes.products : routes.productById.replace(":id", item.id)} aria-label={"sidebar link for category" + item.name} >{item.name}</Link>)
                    }) : ""
            }
        </div>
    )
}

export default Sidebar;