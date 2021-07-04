import SignUpForm from '../../molecules/Form/SignupForm'

const submit = (values) =>{
    console.log(values)
}

function SignUp() {
    return (
        <SignUpForm onSubmit={submit} />
    )
}


export default SignUp