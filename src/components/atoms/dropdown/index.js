import React from "react";
import { string, func, array } from 'prop-types';

import './dropdown.scss';

const Dropdown = ({ items, onSelect, activeId }) => {

    return (
        items.length > 0 ?
        <div>
            <select className="dropdown" onChange={onSelect} defaultValue={activeId}>
                <option value="select" id="select">Select Category...</option>
                {
                    items.map(({ categoryType, id }) => (
                        <option value={id} id={id} key={id}>{categoryType}</option>
                    ))
                }
            </select>
        </div>
        :<></>
    )
}

Dropdown.propTypes = {
    items: array.isRequired,
    onSelect: func,
    activeId: string
}

export default Dropdown;