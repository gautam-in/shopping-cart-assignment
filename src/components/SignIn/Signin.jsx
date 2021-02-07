import React, { useState } from 'react';
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Typography, Container, TextField, Button, Grid, Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

class Signin extends React.Component {
    state = {
        email: "",
        password: "",
        status: false,
        message: ""
    }
    handleTextChange = (event, property) => {
        this.setState({ [property]: event.target.value })
    }

    processLogin = (e) => {
        const { email, password } = this.state;
        const mailFormat = /^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email === "" || password === "") {
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
        } else if (!(/[0-9]/g.test(password)) || !(/[a-zA-Z]/g.test(password))) {
            return this.setState({ message: "Password should contain a uppercase letter, a lowercase letter and a digit", status: true })
        }
        this.props.history.push("/")
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

    MuiCard = () => {
        return (
            <Container>
                <Grid style={{ marginTop: '5%' }} container spacing={7}>
                    <Grid item xs={6}>
                        <Typography style={{ marginTop: '1%' }} variant="h4">
                            Login
                        </Typography>
                        <Typography style={{ marginTop: '5%' }} variant="h6">
                            Get access to your Orders, Wishlist and Recommendations
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{ marginBottom: '5%', width: '100%' }}>
                            <TextField
                                value={this.state.email}
                                type="email"
                                style={{ width: '60%' }}
                                label="Email"
                                required
                                onChange={(e) => this.handleTextChange(e, 'email')} />
                        </div>
                        <div style={{ marginBottom: '5%', width: '100%' }}>
                            <TextField helperText="Password should be of minimum 6 characters. It should include alphabets and numbers"
                                value={this.state.password}
                                style={{ width: '60%', justifyContent: 'center' }}
                                type="password"
                                label="Password"
                                required
                                onChange={(e) => this.handleTextChange(e, 'password')} />
                        </div>
                        <div style={{ marginBottom: '5%', width: '100%' }}>
                            <Button
                                style={{ borderRadius: '0px', width: '60%' }}
                                fullWidth variant="contained"
                                color="secondary"
                                onClick={this.processLogin}>Login</Button>
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
            {this.state.status &&
                this.renderSnackBar()}
        </div>)
    }
}

export default Signin;