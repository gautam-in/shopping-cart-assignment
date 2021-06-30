import NavLink from '../../atoms/Links/NavLink'
import {NavStyled,ListStyled} from './style'

const NavLinks = () =>{
    return (
        <NavStyled>
            <ListStyled>
                <NavLink redirect='/home'>Home</NavLink>
                <NavLink redirect='/products'>Products</NavLink>
            </ListStyled>
        </NavStyled>
    )
}

export default NavLinks
