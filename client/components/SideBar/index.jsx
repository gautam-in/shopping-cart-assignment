import React from 'react'

export default function SideBar({ categories = [], onSelect = () => { }, selectedMenu = '' }) {
    const onMenuSelect = (id) => {
        onSelect(id)
    }

    return (
        <nav className='sidebar'>
            {
                categories?.map(({ name, key, id }) => {
                    return <div key={key} className={selectedMenu === id ? 'menu-option active' : 'menu-option'} onClick={() => onMenuSelect(id)}>{name}</div>
                })
            }
        </nav >
    )
}
