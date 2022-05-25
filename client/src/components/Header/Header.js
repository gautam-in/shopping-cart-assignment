import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LogoPng from '../../images/logo.png';
import CartImage from '../../images/cart.svg';
import './Header.css';
import { Grid } from "@material-ui/core";
import { Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import Cart from '../Cart/Cart'
const useStyles = makeStyles((theme) => ({
    middleSec: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    }
}));
const Header = () => {
    const classes = useStyles();
    const countOfItems= useSelector((state) => {
        return state.CartReducer.countOfItems
    });
    const dispatch = useDispatch();
    const clickToOpenCart = ()=>{
        dispatch({type:'OPEN_MODAL_FOR_CART'})
    }
    return (
        <React.Fragment>
            <AppBar className="appbar" position="static">
                <Toolbar>
                    <Grid item xs={6} sm={4} md={4}>
                                <img src={LogoPng} />
                    </Grid>
                    <Grid item sm={6} md={6} className={classes.middleSec}>
                            <Typography variant="h6">
                                <Link to="/" style={{textDecoration:'none',marginRight:'15px',fontSize:'16px'}}>Home</Link>
                                <Link to="/productListPage" style={{textDecoration:'none',fontSize:'16px'}}>Products</Link>
                            </Typography>
                    </Grid>
                    <Grid item xs={6} sm={2} md={2}>
                        <Grid container className="lastText">
                            <div className="lastTextFirstChild">
                            <Link to="/login" style={{textDecoration:'none'}}>Sign In</Link>
                                <Link to="/signUp" style={{ marginLeft: '10px',textDecoration:'none' }}>Register</Link>
                            </div>
                            <div className="cartMain">
                                <div className="cartMainFirstChild">
                                    <div onClick={clickToOpenCart}><img src={CartImage} width="40" height="40" /></div>
                                    <div style={{ paddingTop: '10px' }}><span>{countOfItems}</span>&nbsp;<span>items</span></div>
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                    <Cart/>

                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
export default Header;