import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LogoPng from '../../images/logo.png';
import CartImage from '../../images/cart.svg';
import './Header.css';
import { Grid } from "@material-ui/core";
import { Link,withRouter} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import Cart from '../Cart/Cart';
import useAuth from '../Hooks/Auth';
const useStyles = makeStyles((theme) => ({
    middleSec: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    }
}));
const Header = (props) => {
    const classes = useStyles();
    const { isLoggedIn,clearStorage } = useAuth();
    const countOfItems = useSelector((state) => {
        return state.CartReducer.countOfItems
    });
    const dispatch = useDispatch();
    const clickToOpenCart = () => {
        if(isLoggedIn){
            dispatch({ type: 'OPEN_MODAL_FOR_CART' })
        }
    }
    const handleLogout = ()=>{
        clearStorage();
        props.history.push('/login');
    }
    return (
        <React.Fragment>
            <div className="appbarParent">
            <AppBar className="appbar" position="static">
                <Toolbar>
                    <Grid item xs={6} sm={4} md={4}>
                        <img src={LogoPng} />
                    </Grid>
                    <Grid item sm={6} md={6} className={classes.middleSec}>
                        <Typography variant="h6">
                            <Link to="/" style={{ textDecoration: 'none', marginRight: '15px', fontSize: '16px' }} data-testid="header-home">Home</Link>
                            <Link to="/productListPage" style={{ textDecoration: 'none', fontSize: '16px' }} data-testid="header-products">Products</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={2} md={2}>
                        <Grid container className="lastText">
                            <div className="lastTextFirstChild">
                                <Link to="/login" style={{ textDecoration: 'none' }} data-testid="header-signIn">Sign In</Link>
                                <Link to="/signUp" style={{ marginLeft: '10px', textDecoration: 'none' }} data-testid="header-register">Register</Link>
                                {isLoggedIn?<span style={{ marginLeft: '10px', textDecoration: 'none',color:'#3f51b5',cursor:'pointer' }} data-testid="header-logout" onClick={handleLogout}>Logout</span>:null}
                                
                            </div>
                            <div className="cartMain">
                                <div className="cartMainFirstChild">
                                    <div onClick={clickToOpenCart} data-testid="header-cartimg">
                                        <img src={CartImage} width="40" height="40" />
                                    </div>
                                    <div style={{ paddingTop: '10px' }}><span>{countOfItems}</span>&nbsp;<span data-testid="header-items">items</span></div>
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                    {/* <Cart /> */}

                </Toolbar>
            </AppBar>
            </div>

        </React.Fragment>
    )
}
export default withRouter(Header);