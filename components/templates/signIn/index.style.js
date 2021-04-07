import styled from "styled-components";

const SignInStyles = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr;
    
    @media (max-width: 500px) {
        grid-template-columns:1fr;
    }
`;
export default SignInStyles;