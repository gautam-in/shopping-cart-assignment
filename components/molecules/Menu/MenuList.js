import {StyledMenu,StyledMenuList} from './style'
import MenuLink from '../../atoms/Links/MenuLinks';

function MenuList ({menuData}){

    const listItems = menuData.map((data) =>
        <MenuLink key={data.id} data={data} href='/' />
    );

    return(
        <StyledMenu>
            <StyledMenuList>
            {listItems}
            </StyledMenuList>
        </StyledMenu>
    )
}


export default MenuList;