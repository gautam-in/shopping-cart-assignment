import React from "react";
import { array, string } from 'prop-types';

import CustomLink from "../../atoms/link";

import './sidebar.scss';

const Sidebar = ({ items, activeId }) => {

    return (
        items.length > 0 ?
            <div className="sidebar">
                <nav>
                    {
                        items.map(({ id, categoryType }) => (
                            <CustomLink href={`/products/${id}`}
                                label={categoryType}
                                key={id}
                                className={id === activeId ? 'active' : ''}
                            />
                        ))
                    }
                </nav>
            </div>
            : <></>
    )
}

Sidebar.propTypes = {
    items: array.isRequired,
    activeId: string
}

export default Sidebar;