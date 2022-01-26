import React from "react";
import CustomLink from "../../atoms/link";

import './sidebar.scss';

const Sidebar = ({ items, activeId }) => {

    return (
        <div className="sidebar">
            <nav>
                {
                    items.map(({ id, categoryType }) => (
                        <CustomLink href={`/products/${id}`} 
                        label={categoryType} 
                        key={id} 
                        className={id===activeId?'active':''}
                        />
                    ))
                }
            </nav>
        </div>
    )
}

export default Sidebar;