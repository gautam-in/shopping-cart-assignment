import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import './Signup.css';
const data = [{
    id: 'firstname',
    label: 'FirstName',
    value: "",
    regex: /^[a-zA-z]+([\s][a-zA-Z]+)*$/,
    error: false,
    helperText: "please enter valid firstname"
}, {
    id: 'lastname',
    label: 'LastName',
    value: "",
    regex: /^[a-zA-z]+([\s][a-zA-Z]+)*$/,
    error: false,
    helperText: "please enter valid lastname"
},
{
    id: 'email',
    label: 'Email',
    value: "",
    regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    error: false,
    helperText: "please enter valid email"
},
{
    id: 'password',
    label: 'Password',
    value: "",
    regex: /[0-9a-zA-Z]{6,}/,
    error: false,
    helperText: "please enter valid password"
},
{
    id: 'confirmPassword',
    label: 'Confirm Password',
    value: "",
    regex: /[0-9a-zA-Z]{6,}/,
    error: false,
    helperText: "please enter valid confirm password"
}
];
// import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    leftAlign: {
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        },
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        },

    },
    rightText: {
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
            width: '100%',
            paddingLeft: '5px'
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        },
    },
    registerBtn: {
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
            width: '100%',
        },
    },
    parentRegisterContainer: {
        marginTop: '10px',
        [theme.breakpoints.down('xs')]: {
            padding: '8px'
        },
    }

}));
const SignUp = (props) => {
    const [registerData, setRegisterData] = useState(data);
    const [confirmPassErr, setConfirmPassErr] = useState(false);
    const classes = useStyles();
    const handleChange = (index, event) => {
        setRegisterData([...registerData.slice(0, index),
        {
            ...registerData[index], value: event.target.value, error: registerData[index].regex.test(event.target.value) ? false : true
        },
        ...registerData.slice(index + 1)
        ]);
        setConfirmPassErr(false);
    }
    const handleRegister = () => {
        const findPasswordObj = registerData.find((datas) => datas.id === "password");
        const findConformPasswordObj = registerData.find((datas) => datas.id === "confirmPassword");
        if (findPasswordObj && findConformPasswordObj && findPasswordObj.value !== findConformPasswordObj.value) {
            setConfirmPassErr(true);
        }
        else {
            setConfirmPassErr(false);
            props.history.push('/login');
        }
    }

    const isSignUpBtnDisabled = registerData.some((data) => data.error);
    const filedNotEmpty = registerData.some((data) => data.value === "");

    return (
        <React.Fragment>
            <Header/>
            <Grid container spacing={8} className={classes.parentRegisterContainer}>
                <Grid item xs={12} md={6} sm={12}>
                    <div className={classes.leftAlign}>
                        <div>
                            <h1>Signup</h1>
                            <p>We do not share your personal details with anyone</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} sm={12} className={classes.rightText}>
                    <div>
                        {registerData.map((items, index) => {
                            return (
                                <div style={{paddingBottom:'15px'}} key={index}>
                                    <TextField
                                        // className="textfield"
                                        inputProps={{ "data-testid": items.id }}
                                        className={classes.rightText}
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
                        })}
                        {confirmPassErr ? <div>
                            <span className="confirmPassErr">Confirm password should match password</span>
                        </div>
                            : null}
                    </div>
                    <div className='btn'>
                        <Button data-testid="signup-submit" className={classes.registerBtn} onClick={handleRegister} variant="contained" color="secondary" disabled={filedNotEmpty || isSignUpBtnDisabled}>
                            Sign Up
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default SignUp;