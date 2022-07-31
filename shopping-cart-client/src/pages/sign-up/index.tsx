import FormInput from "../../components/FormInput"

const SignUp = () =>{
    return (
        <div className="d-flex mt-5" style={{position: "absolute", left: "40%", transform: "translate(-50%)"}}>
            <div>
                <h3>Sign Up</h3>
                <p>We do not share your personal details with anyone.</p>
            </div>
            <div className="ml-5">
                <form className="d-flex flex-column auth-form" autoComplete="off">
                    <FormInput label='First Name' name='firstname' type='text' />
                    <FormInput label='Last Name' name='lastname' type='text' />
                    <FormInput label='Email' name='email' type='email' />
                    <FormInput label='Password' name='password' type='password' />
                    <FormInput label='Confirm Password' name='confirmpassword' type='password' />
                    <button className="mt-3 auth-button">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;


