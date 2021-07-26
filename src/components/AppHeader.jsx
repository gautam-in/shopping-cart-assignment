import React from "react"
import { AppBar, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import CustomLink from "./custom/NavLink";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        flexGrow: 1,
    },
    menuButton: {
        padding: '10px 20px 10px 10px'
    }
}));

const AppHeader = () => {
    const classes = useStyles();
    const history = useHistory();
    return <React.Fragment>
        <AppBar position="static" color="transparent" className={classes.root} >
            <Toolbar className="toolbar-style">
                <section>
                    <IconButton edge="start" color="inherit" aria-label="app logo" onClick={()=>history.push('/category')}>
                        <img src="/static/images/logo_2x.png" alt="app logo" className="large-icon-style" />
                    </IconButton>
                    <CustomLink to="/category">Home</CustomLink>
                    <CustomLink to="/products/all">Products</CustomLink>
                </section>
                <section>
                    <div>
                        <CustomLink to="/login">Sign in</CustomLink>
                        <CustomLink to="register">Register</CustomLink>
                    </div>
                    <div className="cart-container">
                        <IconButton onClick={() => history.push('/cart')} edge="end" className={classes.menuButton} color="inherit" aria-label="app logo">
                            <img src="/static/images/cart.svg" alt="app logo" className="medium-icon-style" />
                        </IconButton>
                        <Typography variant="caption">0 items</Typography>
                    </div>
                </section>
            </Toolbar>
        </AppBar>
    </React.Fragment>
}

export default AppHeader;