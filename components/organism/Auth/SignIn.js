import LoginForm from '../../molecules/Form/LoginForm'
import {Container, LeftSection, RightSection} from './style'
import Heading from '../../atoms/Heading/Heading'
import TextP from '../../atoms/Text/TextP'
import { authorise } from '../../../utils/utils'

const submit = (values) =>{
    console.log("values",values)
    return authorise(values)
}

function SignIn() {
    return (
        <Container>
            <LeftSection>
                <Heading cname="h1" type="h3">Login</Heading>
                <TextP paraTheme="white">Get Access to your orders wishlist and Recommendations</TextP>
            </LeftSection>
            <RightSection>
                <LoginForm onSubmit={submit} />
            </RightSection>
        </Container>
    )
}


export default SignIn