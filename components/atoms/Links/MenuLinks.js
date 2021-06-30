import {StyledLink,StyledMenuList,StyledMenu} from './style'
import Link from 'next/link';

const MenuLink = ({ href, data }) => (
    <li>
      <Link  href={href} passHref>
        <StyledLink>{data.name}</StyledLink>
      </Link>
    </li>
  )

export default MenuLink