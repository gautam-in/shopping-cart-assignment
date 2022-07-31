import FormInput from "../../components/FormInput";

const SignIn = () =>{

    return (
        <div className="d-flex mt-5" style={{position: "absolute", left: "40%", transform: "translate(-50%)"}}>
            <div>
                <h3>Signin</h3>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="ml-5">
                <form className="d-flex flex-column auth-form" autoComplete="off">
                    <FormInput label='Email' name='email' type='email' />
                    <FormInput label='Password' name='password' type='password' />
                    <button className="mt-3 auth-button">Login</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn;
