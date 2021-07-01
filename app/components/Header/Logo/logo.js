import Link from 'next/link';
import {LogoStyle} from './logo.styles';

const Logo = () =>{
    return(
        <Link href="/">
        <LogoStyle
          src="/static/images/logo_2x.png"
          alt="shopping-cart-logo"
          srcSet="/static/images/logo.png 767w"
        />
      </Link>
    )
}
export default Logo;