import LogoStyles from "./index.style";
import Link from 'next/link';
function Logo(){
    return (        
        <LogoStyles>
            <Link href="/home">
                <img src="static/images/logo.png" />
            </Link>
        </LogoStyles>
    )
}
export default Logo;