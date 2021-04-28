import styled from 'styled-components'
import LoginForm from "../molecules/LoginForm";
import PageLayout from '../organisms/PageLayout'

export default function Login() {
    return (
        <PageLayout>
            <LoginContainer>
                <div>
                    <h2> Login </h2>
                    <p> Get access to your Orders, Wishlist and Recommendations </p>
                </div>                
                <LoginForm />
            </LoginContainer>            
        </PageLayout>
    )
}


const LoginContainer = styled.div`
    margin: 0 10%;
    max-width: 100%;
    margin-top : 55px;
    display: flex;
`