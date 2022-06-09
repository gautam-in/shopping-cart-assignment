import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import useAuth from '../Hooks/Auth';
import Header from '../Header/Header';
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
    // regex: /[0-9a-zA-Z]{6,}/,
    regex:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
    helperText: "please enter valid password"
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
    loginBtn: {
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
            width: '100%',
        },
    },
    parentLoginContainer: {
        marginTop: '10px',
        [theme.breakpoints.down('xs')]: {
            padding: '8px'
        },
    }

}));
const Login = (props) => {
    const [loginData, setLoginData] = useState(data);
    const { setDataToStorage } = useAuth();
    const classes = useStyles();
    const handleChange = (index, event) => {
        setLoginData([...loginData.slice(0, index),
        {
            ...loginData[index], value: event.target.value, error: loginData[index].regex.test(event.target.value) ? false : true
        },
        ...loginData.slice(index + 1)
        ]);
    }
    const handleLogin = () => {
        // let loginObject = {}
        const loginObj = loginData.reduce((acc,curVal)=>{
            return Object.assign(acc,{[curVal.id]:curVal.value})
        },{})
        setDataToStorage(loginObj);
        props.history.push('/');
    }
    const isLoginBtnDisabled = loginData.some((data) => data.error);
    const filedNotEmpty = loginData.some((data) => data.value === "");
    return (
        <React.Fragment>
            <Header/>
            <Grid container spacing={8} className={classes.parentLoginContainer}>
                <Grid item xs={12} md={6} sm={12}>
                    <div className={classes.leftAlign}>
                        <div>
                            <h2 data-testid="login-text">Login</h2>
                            <p data-testid="login-wishlist">Get access to your Orders, Wishlist and Recommendations</p>
                        </div>
                    </div>

                </Grid>
                <Grid item xs={12} md={6} sm={12} className={classes.rightText}>
                    <div>
                        {
                            loginData.map((items, index) => {
                                return (
                                    <div style={{ paddingBottom: '18px' }} key={index}>
                                        <TextField
                                            className={classes.rightText}
                                            inputProps={{ "data-testid": items.id }}
                                            // className="textfield"
                                            onChange={(event) => handleChange(index, event)}
                                            required
                                            id={items.id}
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
                        <Button data-testid="login-submit" onClick={handleLogin} className={classes.loginBtn} variant="contained" color="secondary" disabled={filedNotEmpty || isLoginBtnDisabled}>
                            Login
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default Login;