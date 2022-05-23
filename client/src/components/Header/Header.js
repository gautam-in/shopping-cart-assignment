import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LogoPng from '../../images/logo.png';
import CartImage from '../../images/cart.svg';
import './Header.css';
import { Grid } from "@material-ui/core";
import { Link} from 'react-router-dom';

const Header = () => {
    return (
        <React.Fragment>
            <AppBar className="appbar" position="static">
                <Toolbar>
                    {/* <Grid container> */}
                    <Grid item xs={4}>
                        <Grid container className="sbkabazarimg">
                            <Grid item>
                                <img src={LogoPng} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}>
                        <Grid container className="middletext">
                            <Typography variant="h6">
                                
                                <Link to="/" style={{textDecoration:'none'}}>Home</Link>
                            </Typography>
                            <Typography variant="h6">
                                Products
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container className="lastText">
                            <div className="lastTextFirstChild">
                            <Link to="/login" style={{textDecoration:'none'}}>Sign In</Link>
                                {/* <span>Sign In</span> */}
                                <Link to="/signUp" style={{ marginLeft: '10px',textDecoration:'none' }}>Register</Link>
                            </div>
                            <div className="cartMain">
                                <div className="cartMainFirstChild">
                                    <div><img src={CartImage} width="40" height="40" /></div>
                                    <div style={{ paddingTop: '10px' }}><span>0</span>&nbsp;<span>items</span></div>
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                    {/* </Grid> */}


                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
export default Header;