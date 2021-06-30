import Link from 'next/link'
import {StyledSignUp,StyledLink} from './style'

const AuthLink = ({href,children})=>{
    return(
        <Link  href={href} passHref>
            <StyledLink href={href}>{children}</StyledLink>
        </Link>    
    )
}

function Auth() {
    return (
        <StyledSignUp>
            <AuthLink href='sigin-in'>SignIn</AuthLink>
            <AuthLink href='sigin-up'>SignUp</AuthLink>
        </StyledSignUp>
    );
}

export default Auth