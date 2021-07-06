import LoginForm from '../../molecules/Form/LoginForm'
import {Container, LeftSection, RightSection} from './style'
import Heading from '../../atoms/Heading/Heading'
import TextP from '../../atoms/Text/TextP'

const submit = (values) =>{
    console.log(values)
}

function SignIn() {
    return (
        <Container>
            <LeftSection>
                <Heading cname="h1" type="h3">Login</Heading>
                <TextP>Get Access to your orders wishlist and Recommendations</TextP>
            </LeftSection>
            <RightSection>
                <LoginForm onSubmit={submit} />
            </RightSection>
        </Container>
    )
}


export default SignIn