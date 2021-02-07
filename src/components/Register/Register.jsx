import React from 'react';
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Typography, Container, TextField, Button, Grid, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert'

class Register extends React.Component {
    state = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirm_password: "",
        status: false,
        message: ""
    }

    processTextFieldChange = (e, property) => {
        this.setState({ [property]: e.target.value })
    }

    renderTextField = () => {
        const divStyle = {
            marginBottom: '5%',
            width: '100%'
        };

        const textFieldStyle = {
            width: '60%'
        };

        return <>
            <div style={divStyle}>
                <TextField style={textFieldStyle}
                    onChange={(e) => this.processTextFieldChange(e, 'fname')} value={this.state.fname} label="First Name" required />
            </div>
            <div style={divStyle}>
                <TextField style={textFieldStyle}
                    onChange={(e) => this.processTextFieldChange(e, 'lname')} value={this.state.lname} label="Last Name" required />
            </div>
            <div style={divStyle}>
                <TextField style={textFieldStyle}
                    onChange={(e) => this.processTextFieldChange(e, 'email')} value={this.state.email} label="Email" required />
            </div>
            <div style={divStyle}>
                <TextField style={textFieldStyle}
                    onChange={(e) => this.processTextFieldChange(e, 'password')}
                    value={this.state.password} type="password"
                    label="Password"
                    helperText="Password length should be of minimum 6 characters. It should include alphabets and numbers"
                    required />
            </div>
            <div style={divStyle}>
                <TextField style={textFieldStyle} type="password"
                    value={this.state.confirm_password}
                    onChange={(e) => this.processTextFieldChange(e, 'confirm_password')} label="Confirm Password" required />
            </div>
        </>
    }
    handleClose = () => {
        this.setState({ status: false })
    }

    renderSnackBar = () => {
        return <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }
            }
            open={this.state.status}
        >
            <Alert
                onClose={() => this.handleClose()}
                severity="error"
            >
                {this.state.message}
            </Alert>
        </Snackbar>
    }
    handleSignup = (e) => {
        const { email, password, confirm_password, fname, lname } = this.state;
        const mailFormat = /^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email === "" || password === "" || confirm_password === "" || fname === "" || lname === "") {
            return this.setState({ message: "All fields are mandatory", status: true })
        }
        else if (!email.match(mailFormat)) {
            return this.setState({ message: "Please provide email in correct format", status: true })
        }
        else if (password.length < 6) {
            return this.setState({ message: "Password length is less than 6 characters. ", status: true })
        }
        else if (/\s/.test(password)) {
            return this.setState({ message: "Password should not contain spaces", status: true })
        }
        else if (!(/[0-9]/g.test(password)) || !(/[a-zA-Z]/g.test(password))) {
            return this.setState({ message: "Password should contain a uppercase letter, a lowercase letter and a digit", status: true })
        }
        else if (password !== confirm_password) {
            return this.setState({ message: "Passwords doesn't match", status: true })
        }
        this.props.history.push('/')
    }
    MuiCard = () => {
        return (
            <Container>
                <Grid style={{ marginTop: '5%' }} container spacing={7}>
                    <Grid item xs={6}>
                        <Typography style={{ marginTop: '1%' }} variant="h4">
                            Signup
                        </Typography>
                        <Typography style={{ marginTop: '5%' }} variant="h6">
                            We do not share your personal details with any one
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderTextField()}
                        <div style={{ marginBottom: '5%', width: '100%' }}>
                            <Button style={{
                                borderRadius: '0px',
                                width: '60%',
                                textTransform: 'none'
                            }} fullWidth
                                variant="contained"
                                color="secondary"
                                onClick={(e) => this.handleSignup(e)}>
                                Signup
                                    </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        );
    }
    render() {
        return (<div>
            <Header />
            {this.MuiCard()}
            <Footer />
            {
                this.state.status &&
                this.renderSnackBar()
            }
        </div>)
    }
}
export default Register;