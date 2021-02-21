import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Typography, Link, Modal, Grid, Button, Paper } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import addItem from '../../redux/actions/addItem';
import removeItem from '../../redux/actions/removeItem';
import './Header.css'
class Header extends React.Component {
    state = {
        open: false
    }
    processSabkaBazaarLogo = () => {
        return (
            <div className="img">
                <img id="logo"
                    src="/static/images/logo_2x.png"
                    alt="Sabka Bazaar" />
            </div>
        )
    }

    processMenuOptions = () => {
        return (
            <div className="menu">
                <div>
                    <p id="home">
                        <Link onClick={() => this.props.history.push("/")} style={{ color: "#52525d" }}>
                            <strong>Home</strong>
                        </Link>
                    </p>
                </div>

                <div>
                    <p id="products">
                        <Link onClick={() => this.props.history.push("/products")} style={{ color: "#52525d" }}>
                            <strong>Products</strong>
                        </Link>
                    </p>
                </div>

            </div>
        );
    }

    processOtherOptions = () => {
        return (
            <div>
                <div className="other-links">
                    <div>
                        <Link onClick={() => this.props.history.push("/signin")}
                            style={{ color: '#52525d' }}>
                            <strong>SignIn</strong>
                        </Link>
                    </div>
                    <div>
                        <Link onClick={() => this.props.history.push("/register")}
                            style={{ marginLeft: '15%', color: '#52525d' }}>
                            <strong>Register</strong>
                        </Link>
                    </div>
                </div>
                <div className="icon-class">
                    <IconButton onClick={this.setModalState} id="icon-btn">
                        <ShoppingCartIcon style={{ fontSize: "1.5rem" }} color="secondary" />
                        <span id="items-count">{`${this.props.productdetail.count} items`}</span>
                    </IconButton>
                </div>
            </div>
        );
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    setModalState = () => {
        this.setState({ open: true })
    }


    processModal = () => {
        return (
            <Modal
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {
                    <div style={
                        {
                            width: '30%',
                            height: '85%',
                            backgroundColor: 'white',
                            outline: 0,
                            margin: 'auto',
                            marginTop: '6%',
                            marginLeft: '52.8%'
                        }
                    }>
                        {
                            this.props.productdetail.count ?
                                this.processCartView()
                                :
                                this.processEmptyCart()
                        }
                    </div>
                }
            </Modal>

        );
    }

    renderCartViewHeader = () => {
        console.log(this.props.productdetail)
        return <div style={{ height: '7%' }}>
            <Grid container style={{ backgroundColor: 'black', color: 'white', height: '100%' }}>
                <Grid item xs={10}>
                    <Typography style={{ padding: '1%' }} variant="subtitle1"><strong>{`My Cart (${this.props.productdetail.count} items)`}</strong></Typography>
                </Grid>
                <Grid item xs={2}>
                    <IconButton onClick={this.handleClose} style={{ marginTop: '-11%', color: 'white', float: 'right' }}>
                        <CloseIcon fontSize="inherit" style={{ color: 'white' }} />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    }
    renderItemDetails = () => {
        return this.props.productdetail.details.map(data => {
            return (
                <Paper key={data.id} style={{ margin: '2% 0%', boxShadow: 'none' }}>
                    <Grid container spacing={1}>
                        <Grid item xs={3} style={{ padding: '2%' }}>
                            <img style={{ width: '80%' }} src={data.imageURL} alt={data.name} />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="subtitle2"><strong>{data.name}</strong></Typography>
                            <Grid container style={{ margin: '1%' }}>
                                <Grid item xs={"auto"}>
                                    <button style={{
                                        borderRadius: '50%',
                                        border: 'none',
                                        backgroundColor: '#f50057',
                                        color: 'white',
                                        display: 'block',
                                        height: '100%',
                                        width: '120%',
                                        outline: 'none'
                                    }}
                                        onClick={() => this.props.removeItem(data)}>
                                        -
                                             </button>
                                </Grid>
                                <Grid item xs={1} style={{ textAlign: 'center' }}>
                                    {data.count}
                                </Grid>
                                <Grid item xs={1}>
                                    <button style={{
                                        borderRadius: '50%',
                                        border: 'none',
                                        backgroundColor: '#f50057',
                                        color: 'white',
                                        display: 'block',
                                        height: '100%',
                                        width: '80%',
                                        outline: 'none'
                                    }}
                                        onClick={() => this.props.addItem(data)}>
                                        +
                                            </button>
                                </Grid>
                                <Grid item xs={1}>
                                    X
                                </Grid>
                                <Grid item xs={6}>
                                    {`Rs.${data.price}`}
                                </Grid>
                                <Grid item xs={2}>
                                    {`Rs.${data.totalPrice}`}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            );
        })
    }

    renderPromotionalTag = () => {
        return <Paper style={{ margin: '2%', padding: '1%', boxSizing: 'border-box' }}>
            <Grid container style={{ height: '100%' }} spacing={1}>
                <Grid item xs={3}>
                    <img src="/static/images/lowest-price.png" alt="lowest price" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={9}>
                    <span style={{ marginTop: '2vh' }}>You won't find it cheaper anywhere</span>
                </Grid>
            </Grid>
        </Paper>
    }

    renderProceedToCheckout = () => {
        return <>.
            <Paper style={{ padding: '4%' }}>
                <div style={{ marginBottom: '1.5%', textAlign: 'center' }}>Promo code can be applied on payment page</div>
                <Button fullWidth
                    onClick={this.handleClose}
                    style={{ textTransform: 'none', fontWeight: 'bolder' }} variant="contained" color="secondary">
                    Proceed to checkout
                        <span style={{ color: 'white', marginLeft: 'auto', fontWeight: 'bolder' }}>
                        {`Rs. ${this.props.productdetail.totalAmt}`}
                    </span>
                    <span style={{ color: 'white', marginLeft: '2%', marginTop: "-0.5%", fontWeight: '1000' }}>
                        {`>`}
                    </span>
                </Button>
            </Paper>
        </>

    }
    processCartView = () => {
        return (
            <div style={{ backgroundColor: '#e7e7ec', height: '100%' }}>
                {this.renderCartViewHeader()}
                <div style={{ height: '72%', overflow: 'hidden', overflowY: 'auto' }}>
                    {this.renderItemDetails()}
                    {this.renderPromotionalTag()}
                </div>
                {this.renderProceedToCheckout()}
            </div>

        )
    }

    processEmptyCart = () => {
        return (
            <>
                <div style={{ height: '39%' }}>
                    <Grid container style={{ backgroundColor: 'black', color: 'white' }}>
                        <Grid item xs={10}>
                            <Typography style={{ padding: '2%' }} variant="h6"><strong>My Cart</strong></Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton onClick={this.handleClose} style={{ color: 'white', float: 'right' }}>
                                <CloseIcon fontSize="inherit" style={{ color: 'white' }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ textAlign: 'center', height: '50%' }}>
                    <Typography variant="h6"><strong>No items in your cart</strong></Typography>
                    <div>
                        Your favourite items are just a click away
                    </div>
                </div>
                <div style={{ padding: '1%', height: '10%' }}>
                    <Button fullWidth
                        onClick={this.handleClose}
                        style={{ textTransform: 'none', borderRadius: '0%' }} variant="contained" color="secondary">Start Shopping</Button>
                </div>
            </>
        );
    }

    render() {
        return (
            <header className="header">
                <div className="nav-bar">
                    <div>
                        {this.processSabkaBazaarLogo()}
                    </div>
                    <div>
                        {this.processMenuOptions()}
                    </div>
                    <div>
                        {this.processOtherOptions()}
                    </div>
                    {this.processModal()}
                </div>
            </header >
        )
    }
}



const mapStateToProps = (state) => {
    return {
        productdetail: state.productdetail,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addItem,
        removeItem
    },
        dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));