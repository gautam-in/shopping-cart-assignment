import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

export default function DropDown({ categories = [], selectedMenuItem = '', onSelect = () => { } }) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedMenuItem}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    categories?.map((cat) => {
                        return <Dropdown.Item onClick={() => onSelect(cat?.id)}>{cat?.name}</Dropdown.Item>
                    })
                }

            </Dropdown.Menu>
        </Dropdown>
    )
}
