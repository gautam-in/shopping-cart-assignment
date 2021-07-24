import Link from 'next/link'
import {StyledSignUp,StyledLink} from './style'

const AuthLink = ({href,children})=>{
    return(
        <Link  href={href} passHref>
            <StyledLink href={href}>{children}</StyledLink>
        </Link>    
    )
}

function Auth({userInfo}) {
    const {name,sessionActive } = userInfo

    if(sessionActive){
        return(
            <StyledSignUp>
                <AuthLink href='#'>{name} </AuthLink>
                <AuthLink href='#'>Logout</AuthLink>
            </StyledSignUp>    
        ) 
    }
    return (
        <StyledSignUp>
            <AuthLink href='signin'>SignIn</AuthLink>
            <AuthLink href='signup'>SignUp</AuthLink>
        </StyledSignUp>
    );
}

export default Auth