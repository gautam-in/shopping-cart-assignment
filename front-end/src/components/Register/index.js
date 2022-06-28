import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';

import ROUTES from '../../shared/constants/routes';
import { register } from '../../shared/constants/validations';
import { USER_ACTION_TYPES } from '../../shared/redux/actionTypes/user';
import storageService from '../../shared/services/storageService';
import { setValidationFlag } from '../../shared/Utils/utility';


import './index.css';

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [, forceUpdate] = useState();

    /*
    * initiate validator
    * */
    const validator = useRef(
        new SimpleReactValidator({
            element: (message) => <span className="error-color">{message}</span>
        })
    ).current;

    const [passwordDoNotMatch, setPasswordDoNotMatche] = useState(false);

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userPassword: '',
        confirmPassword: ''
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

        if (state.userPassword.toLowerCase() !== state.confirmPassword.toLowerCase()) {
            setPasswordDoNotMatche(true);
            return;
        }
        storageService.setItem('userDetails', state);
        dispatch({ type: USER_ACTION_TYPES.LOGIN });
        navigate(ROUTES.home);
    }

    return <>

        <div className="register">
            <div className="main-heading">
                <h1>Signup</h1>
                <p>We do not share your personal details with anyone.</p>
            </div>
            <div className="signup-form">
                <div className={setValidationFlag("firstName",
                    state.firstName,
                    register.firstName,
                    validator
                ) ? "form-group error" : "form-group"}>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="firstName"
                        value={state.firstName}
                        onChange={handleChange}
                    />
                    <label htmlFor="firstName">First Name</label>
                    {setValidationFlag("firstName",
                        state.firstName,
                        register.firstName,
                        validator
                    ) && (
                            <p className="error-msg">{validator.message(
                                "firstName",
                                state.firstName,
                                register.firstName
                            )}</p>
                        )}
                </div>
                <div className={setValidationFlag("lastName",
                    state.lastName,
                    register.lastName,
                    validator
                ) ? "form-group error" : "form-group"}>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="lastName"
                        value={state.lastName}
                        onChange={handleChange}
                    />
                    <label htmlFor="lastName">Last Name</label>
                    {setValidationFlag("lastName",
                        state.lastName,
                        register.lastName,
                        validator
                    ) && (
                            <p className="error-msg">{validator.message(
                                "lastName",
                                state.lastName,
                                register.lastName
                            )}</p>
                        )}
                </div>
                <div className={setValidationFlag("email",
                    state.email,
                    register.email,
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
                        register.email,
                        validator
                    ) && (
                            <p className="error-msg">{validator.message(
                                "email",
                                state.email,
                                register.email
                            )}</p>
                        )}
                </div>
                <div className={setValidationFlag(
                    "userPassword",
                    state.userPassword,
                    register.userPassword,
                    validator
                ) ? "form-group error" : "form-group"}>
                    <input
                        type="password"
                        name="userPassword"
                        id="userPassword"
                        placeholder="Password"
                        value={state.userPassword}
                        onChange={handleChange}
                    />
                    <label htmlFor="userPassword">Password</label>
                    {setValidationFlag(
                        "userPassword",
                        state.userPassword,
                        register.userPassword,
                        validator
                    ) && (
                            <p className="error-msg">{validator.message(
                                "userPassword",
                                state.userPassword,
                                register.userPassword
                            )}</p>
                        )}
                </div>
                <div className={setValidationFlag(
                    "confirmPassword",
                    state.confirmPassword,
                    register.confirmPassword,
                    validator
                ) ? "form-group error" : "form-group"}>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="confirmPassword"
                        value={state.confirmPassword}
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Confirm Password</label>
                    {setValidationFlag(
                        "confirmPassword",
                        state.confirmPassword,
                        register.confirmPassword,
                        validator
                    ) && (
                            <p className="error-msg">{validator.message(
                                "confirmPassword",
                                state.confirmPassword,
                                register.confirmPassword
                            )}</p>
                        )}

                    { passwordDoNotMatch && <p className="error-msg"> Password / Confirm password does not match.</p>  }
                </div>
                <button type="submit" className="register-btn" onClick={handleSubmit}>
                    Register
                </button>
            </div>
        </div>
    </>

}

export default Register;