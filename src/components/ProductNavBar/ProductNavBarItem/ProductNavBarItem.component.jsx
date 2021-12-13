import React from 'react'
import { NavbarItem } from './ProductNavBarItem.styled'

export const ProductNavBarItem = ({name}) => {
    return (
        <>
        <NavbarItem>
            {name}
        </NavbarItem>
        <hr/>
        </>
    )
}
