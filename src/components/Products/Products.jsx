import { Container, Grid, Card, CardActions, Typography, Button, CardMedia } from '@material-ui/core';
import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { connect } from 'react-redux';
import buynow from '../../redux/actions/buynow'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { withRouter } from 'react-router-dom'
import './Products.css'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const data = require('../../server/products/index.get.json');
const resp = require('../../server/addToCart/index.post.json');
const categories = require('../../server/categories/index.get.json')

class Products extends React.Component {

    state = {
        open: false,
        categoryData: data,
        status: false,
        id: this.props.match.params.id ? this.props.match.params.id : ''
    }
    componentDidMount() {
        if (this.props.match.params.id) {
            let categoryData = data.filter(value => {
                if (this.props.match.params.id && value.category === this.props.match.params.id) {
                    return true
                }
                return false
            })
            this.setState({ categoryData })
        } else {
            this.setState({ categoryData: data })
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.count !== undefined && prevProps.count < this.props.count) {
            this.setState({ open: true }, () => {
                setInterval(() => {
                    this.setState({ open: false })
                }, 3000)
            })
        }
        if (prevProps.match.path !== this.props.match.path) {
            if (!this.props.match.params.id) {
                this.setState({ categoryData: data, id: "" })
            }
        }
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    handleMenuClick = (categoryId) => {
        this.props.history.push(`/products/${categoryId}`)
        if (this.state.id !== categoryId) {
            const categorizedData = data.filter(value => {
                if (value.category === categoryId) {
                    return true
                }
                return false
            })
            this.setState({ categoryData: categorizedData, id: categoryId })
        } else {
            this.setState({ categoryData: data, id: "" })
        }
    }
    processMenu = (name, id) => {
        return (
            <div>
                <Button key={id} id="category-btn" onClick={() => this.handleMenuClick(id)}>
                    {name}
                </Button>
            </div>);
    }
    processMenuList = () => {
        return <div className="category-list">
            {
                categories.map(category => {
                    return (
                        <div style={{ backgroundColor: category.id === this.state.id ? 'orange' : "" }}>{this.processMenu(category.name, category.id)}</div>
                    )
                })
            }
        </div>
    }
    processItemGrid = () => {
        return (
            <div className="item-container">
                <div className="section">
                    <div></div>
                    <div className="menu-list">
                        {this.processMenuList()}
                    </div>
                    <div style={{ marginTop: '1%', height: '100%' }}>
                        {this.processProductLists(this.state.categoryData)}
                    </div>
                    <div></div>
                </div>
            </div>
        );
    }

    processProductCard = (value) => {
        return (
            <Card key={value.id} style={{ height: '100%', boxShadow: 'none', borderBottom: 'dashed #e7e7ec' }}>
                <div className="product-name">
                    {value.name}
                </div>
                <CardMedia
                    style={{ backgroundSize: 'contain', height: '20vh', padding: '1.5vh' }}
                    image={value.imageURL}
                    title={value.name}
                />
                <div className="description">
                    {value.description}
                </div >
                <CardActions style={{ boxSizing: "border-box", fontSize: '0.7rem' }}>
                    <p id="mrp">
                        <strong>{`MRP Rs.${value.price}`}</strong>
                    </p>
                    <Button
                        onClick={() => this.props.buynow(value)}
                        id="buy-now"
                        variant="contained"
                        color="secondary"
                    >
                        Buy Now
                </Button>
                </CardActions>
            </Card >

        );
    }

    processProductLists = (data) => {
        return (
            <div className="product-list">
                {data.map(value =>
                    <div className="product" key={value.id}>
                        {this.processProductCard(value)}
                    </div>
                )}
            </div>
        );
    }
    render() {
        return (
            <>
                <Grid container>
                    <Grid item xs={12}>
                        <Header />
                    </Grid>
                    <Grid item xs={12}>
                        {this.processItemGrid()}
                    </Grid>
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
                {
                    this.state.open &&
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }
                        }
                        open={this.state.open}
                    >
                        <Alert onClose={this.handleClose} severity="success">
                            {resp.responseMessage}
                        </Alert>
                    </Snackbar>
                }
            </>)
    }
}

const mapStateToProps = state => {
    return {
        count: state.productdetail.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buynow: (value) => dispatch(buynow(value)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Products));