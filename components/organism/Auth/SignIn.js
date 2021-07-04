import LoginForm from '../../molecules/Form/LoginForm'

const submit = (values) =>{
    console.log(values)
}

function SignIn() {
    return (
        <LoginForm onSubmit={submit} />
    )
}


export default SignIn