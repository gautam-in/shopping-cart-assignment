import SignUp from '../components/organism/Auth/SignUp' 
import withData from '../lib/withData'

function SignUpPage(props){
    return (
        <SignUp {...props} />
    )
}

export default withData(SignUpPage,'signup')