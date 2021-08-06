import SignIn from '../components/organism/Auth/SignIn' 
import withData from '../lib/withData'

function SignInPage(props){
    return (
        <SignIn {...props} />
    )
}

export default withData(SignInPage,'signin')