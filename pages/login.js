import styled from 'styled-components';

import Button from "../components/form/Button"
import Input from "../components/form/Input"
import Form from "../components/form/Form"
import { FooterGrayStripe } from "../components/footer";

export default function LoginPage(){    
   
    return (
        <DivContainer>
            <LoginContainer>
                <DivContainer>
                    <H2> Login </H2>
                    <Para> Get access to your Orders, Wishlist and Recommendations </Para>
                </DivContainer>
                
                <DivContainer>
                    <Form name = 'loginForm' targetPage = 'http://localhost:3000/products'>
                        <Input type = 'email' placeholder = 'email' name = 'email'/>           
                        <Input type= 'password' placeholder = 'password' name = 'password'/>
                        <Button name = "Login" type = "submit" />
                    </Form>
                </DivContainer>
            </LoginContainer>
            <FooterGrayStripe>
                <p>Copyright <span>&copy;</span> 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd</p>
            </FooterGrayStripe>
        </DivContainer>
    )
}


const DivContainer = styled.div`
`

const LoginContainer = styled.div`
    margin: 0 auto;
    max-width: 60%;
    margin-top : 55px;
    display: flex;
`
const H2 = styled.h2``
const Para = styled.p``


