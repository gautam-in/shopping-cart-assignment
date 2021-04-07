import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { connect } from "react-redux";
import Form from "../../../styles/Form";
import * as actionTypes from '../../../store/actions';
import * as credentials from '../../../utils/userInfo';
import SignInStyles from "./index.style";
import ErrorMessage from "../../atoms/error";
function SignInPage(props) {
    const route = useRouter();
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [errorState, setErrorState] = useState({
        error: false
    })

    function handleSubmit(e) {
        console.log("HANDLE SUBMIT", inputs)
        setErrorState({
            error: false
        })
        e.preventDefault();
        if (inputs.email == credentials.USERNAME &&
            inputs.password == credentials.PASSWORD) {
            setErrorState({
                error: false
            })
            props.login();
            route.push({
                pathname: '/home'
            })
        }
        else {
            setErrorState({
                error: true
            })
        }
    }
    function handleChange(e) {
        let { name, value, type } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    return (
        <SignInStyles>
            <div style={{ margin: 'auto' }}>
                <h1>LOGIN</h1>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <Form method="POST" onSubmit={handleSubmit}>
                    {errorState.error && 
                    <ErrorMessage message="UserName & Password did not match" />
                    }
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email Address"
                        value={inputs.email}
                        required
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={inputs.password}
                        required
                        onChange={handleChange} />
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        type="submit"
                    >Log In</Button>
                </fieldset>
            </Form>
        </SignInStyles>
    )
}

const mapStateToProps = state => {
    return { isLogIn: state.isLoggedIn }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch({ type: actionTypes.LOGIN })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage)