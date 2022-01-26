import React from "react";

import './dropdown.scss';

const Dropdown = ({items, onSelect, activeId}) => {

    return (
        <div>
            <select className="dropdown" onChange={onSelect}>
                <option value="select" id="select">Select Category...</option>
                {
                    items.map(({categoryType, id}) => (
                        <option selected={activeId===id?true:false} value={id} id={id} key={id}>{categoryType}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Dropdown;