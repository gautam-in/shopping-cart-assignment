import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter} from 'react-router-dom';
import './Login.css';
const data = [{
    id: 'email',
    label: 'Email',
    value: "",
    error: false,
    regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    helperText: "please enter valid email"
}, {
    id: 'password',
    label: 'Password',
    value: "",
    error: false,
    regex: /[0-9a-zA-Z]{6,}/,
    helperText: "please enter valid password"
}
];
const Login = (props) => {
    const [loginData, setLoginData] = useState(data);
    const handleChange = (index, event) => {
        setLoginData([...loginData.slice(0, index),
        {
            ...loginData[index], value: event.target.value, error: loginData[index].regex.test(event.target.value) ? false : true
        },
        ...loginData.slice(index + 1)
        ]);
    }
    const handleLogin = ()=>{
        props.history.push('/');
    }
    const isLoginBtnDisabled = loginData.some((data) => data.error);
    const filedNotEmpty = loginData.some((data) => data.value === "");
    console.log("jjj", loginData, isLoginBtnDisabled, filedNotEmpty)
    return (
        <React.Fragment>
            <div>
                {
                    loginData.map((items, index) => {
                        return (
                            <div>
                                <TextField
                                    className="textfield"
                                    onChange={(event) => handleChange(index, event)}
                                    required
                                    id="standard-required"
                                    label={items.label}
                                    value={items.value}
                                    error={items.error}
                                    helperText={items.error ? items.helperText : ""}
                                />
                            </div>

                        )
                    })
                }
            </div>
            <div className='btn'>
                <Button onClick={handleLogin} className="textfield" variant="contained" color="secondary" disabled={filedNotEmpty || isLoginBtnDisabled}>
                    Login
                </Button>
            </div>
        </React.Fragment>
    )
}
export default withRouter(Login);