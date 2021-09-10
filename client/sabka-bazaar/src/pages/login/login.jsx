import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import './login.scss'
import TextField from '@material-ui/core/TextField';
import {
    ThemeProvider,
    createTheme,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: '#03a9f4',
        }
    },
});
const Login = () => {
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(location.pathname == '/login')
useEffect(()=>{
    setIsLogin(location.pathname == '/login')
},[location.pathname])
    return <div className='d-flex flex-column h-100'>
        <Header />
        <div className='login-content d-flex flex-row flex-column-xs'>
            <div className='d-flex flex-column'>
                <h1 className='heading' >{isLogin ? 'Login' : 'Signup'}</h1>
                <p className='text'> {isLogin ? 'Get access to your Orders, Wishlist and Recommendations' : 'We do not share your personal details with anyone'}</p>
            </div>
            <div className='d-flex flex-column box'>
                <ThemeProvider theme={theme}>
                    {
                        isLogin ? null :
                            <>
                                <TextField className='text-field' label="FirstName" />
                                <TextField className='text-field' label="LastName" />
                            </>
                    }


                    <TextField className='text-field' label="Email" />
                    <TextField className='text-field' type='password' label="password" />
                    {
                        isLogin ? null :
                            <TextField className='text-field' type='password' label="Confirm password" />

                    }
                    <Button className='action-button' variant="contained" color="secondary">
                        {
                            isLogin ? 'Login' : 'Signup'
                        }
                    </Button>
                </ThemeProvider>
            </div>
        </div>
        <Footer />
    </div>
}
export default withRouter(Login);