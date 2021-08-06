import React, {useState} from 'react'
import { useRouter } from 'next/router'
import {Container,Dropdown,DropdownContent} from './style'
import {MenuOpen,MenuClose} from '../../atoms/Icons/Icons'

const MobileMenu = (props) => {
    
    let [displayDropdown,setDisplayDropDown] = useState(false)
    const toggleDropdown = (e)=>(setDisplayDropDown(!displayDropdown))
    const { dropDownTheme, menuData } = props
    const router = useRouter()
    const { name } = router.query;
    if(!menuData){
        return ''
    }
    const listItems = menuData.map((data) =>
        <a key={data.id} data={data} href={`/products?category=${data.id}&name=${data.name}`}>{data.name}</a>
    );
    
    const MenuIcon = ({open})=> (open ? <MenuOpen/> : <MenuClose/>)

    return (
        <Container dropDownTheme={dropDownTheme}>
            <Dropdown dropDownTheme={dropDownTheme} onClick={(event)=>toggleDropdown()}>
                <div>{name}</div>
                <div><MenuIcon open={displayDropdown}/></div>
            </Dropdown>
                <DropdownContent display={displayDropdown}>
                    {listItems}
                </DropdownContent>
        </Container>
    )
}


export default MobileMenu