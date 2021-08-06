import {StyledMenu,StyledMenuList} from './style'
import {MenuLink} from '../../atoms/Links/Links';

function MenuList ({menuData}){

    const listItems = menuData.map((data) =>
        <MenuLink key={data.id} data={data} href={`/products?category=${data.id}`} />
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