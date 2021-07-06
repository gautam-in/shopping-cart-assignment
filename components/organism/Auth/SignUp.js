import SignUpForm from '../../molecules/Form/SignupForm'
import {Container, LeftSection, RightSection} from './style'
import Heading from '../../atoms/Heading/Heading'
import TextP from '../../atoms/Text/TextP'

const submit = (values) =>{
    console.log(values)
}

function SignUp() {
    return (
        <Container>
            <LeftSection>
                <Heading cname="h1" type="h3">Signup</Heading>
                <TextP>We don't share your personal details with anyone</TextP>
            </LeftSection>
            <RightSection>
                <SignUpForm onSubmit={submit} />
            </RightSection>
        </Container>
    )
}


export default SignUp