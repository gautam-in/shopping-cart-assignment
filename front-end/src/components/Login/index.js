import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";

import ROUTES from "../../shared/constants/routes";
import UserDetails from '../../shared/constants/testCredentials';
import { login } from '../../shared/constants/validations';
import { USER_ACTION_TYPES } from '../../shared/redux/actionTypes/user';
import StorageService from '../../shared/services/storageService';
import { setValidationFlag } from '../../shared/Utils/utility';
import './index.css';

const Login = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    let [, forceUpdate] = useState();

    /*
    * initiate validator
    * */
    const validator = useRef(
        new SimpleReactValidator({
            element: (message) => <div className="error-color">{message}</div>,
        })
    ).current;

    const [state, setState] = useState({
        email: 'test-user@yopmail.com',
        password: 'test@123',
    });



    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setState({
            ...state,
            [name]: value
        });
    }

    const handleSubmit = () => {
        if (!validator.allValid()) {
            validator.showMessages();
            forceUpdate({});
            return;
        }

        if (state.email === UserDetails.email && state.password === UserDetails.password) {
            StorageService.setItem('userDetails', state);
            dispatch({ type: USER_ACTION_TYPES.LOGIN });
            navigate(ROUTES.home);
        }
    }

    return <>
        <div className="signin">
            <div className="main-heading">
                <h1>Login</h1>
                <p>Get access to your Orders, Whishlist and Recommendations.</p>
            </div>
            <div className="signin-form">
                <div className={setValidationFlag("email",
                    state.email,
                    login.email,
                    validator
                ) ? "form-group error" : "form-group"}>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={state.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    {setValidationFlag("email",
                        state.email,
                        login.email,
                        validator
                    ) && (
                            <p className="error-msg">{validator.message(
                                "email",
                                state.email,
                                login.email
                            )}</p>
                        )}
                </div>
                <div className={setValidationFlag(
                    "password",
                    state.password,
                    login.password,
                    validator
                ) ? "form-group error" : "form-group"}>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>
                    {setValidationFlag(
                        "password",
                        state.password,
                        login.password,
                        validator
                    ) && (
                            <p className="error-msg">{validator.message(
                                "password",
                                state.password,
                                login.password
                            )}</p>
                        )}
                </div>
                <button type="submit" className="signin-btn" onClick={handleSubmit}>
                    Login
                </button>
            </div>
        </div>
    </>
};

export default Login;
