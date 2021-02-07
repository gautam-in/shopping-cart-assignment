import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';
class Register extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
            <div>
                <span className="register">
                   SignUp
                </span>
                <span className="register2">
                We do not share your personal details with anyone
                </span>
            </div>
            <div class="text-fields">
            <div class="form__group field">
                            <input type="input" class="form__field" placeholder="First name" name="firstname" id='firstname' required />

                        </div>
                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Last name" name="lastname" id='lastname' required />

                        </div>
                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Email" name="email" id='email' required />

                        </div>
                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Password" name="password" id='password' required />

                        </div>
                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Confirm Password" name="password" id='confrimpassword' required />

                        </div>
                        <div>
                        <a class="btn" href="#">Register</a>
                        </div>
            </div>
            </div>
        )
    }
}
export default Register;