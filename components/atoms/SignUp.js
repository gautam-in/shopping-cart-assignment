import styled from "styled-components";
import Link from 'next/link';
    
const StyledSignUp = styled.div`
    display:flex;
`; 

const StyledLink = styled.a`
    font-family: "Rockwell Regular";
    padding:2px;
    font-size: 12px;
`;

const SignUp = ({children,href}) => {
    return (
        <StyledSignUp>
            <StyledLink href='/signin'>SignIn</StyledLink>
            <StyledLink href='/signup'>SignUp</StyledLink>
        </StyledSignUp>
    );
}

export {SignUp}