import { Container, Grid, Card, CardActions, Typography, Button, CardMedia } from '@material-ui/core';
import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { connect } from 'react-redux';
import buynow from '../../redux/actions/buynow'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { withRouter } from 'react-router-dom'
import './Products.css';
import Select from '@material-ui/core/Select';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// const data = require('../../server/products/index.get.json');
const resp = require('../../server/addToCart/index.post.json');
// const categories = require('../../server/categories/index.get.json')

class Products extends React.Component {

    state = {
        open: false,
        categoryData: "",
        status: false,
        id: this.props.match.params.id ? this.props.match.params.id : '',
        products: [],
        categories: [],
        message: ''
    }

    fetchAPI = (value) => {
        fetch(`http://localhost:5000/${value}`, {
            method: 'get'
        })
            .then(res => {
                res.json().then(data => {
                    if (value === 'products') {
                        this.setState({ [value]: data, categoryData: data })
                    } else {
                        this.setState({ [value]: data })
                    }
                })
            })
            .catch(err => {
                console.log(`Cannot find ${value}, Error is: ${err}`)
            })
    }
    componentDidMount() {
        this.fetchAPI('products');
        this.fetchAPI('categories');
        if (this.props.match.params.id) {
            let categoryData = this.state.products.filter(value => {
                if (this.props.match.params.id && value.category === this.props.match.params.id) {
                    return true
                }
                return false
            })
            this.setState({ categoryData, id: this.props.match.params.id })
        } else {
            this.setState({ categoryData: this.state.products })
        }
    }
    componentDidUpdate(prevProps) {
        // if (prevProps.count !== undefined && prevProps.count < this.props.count) {
        //     this.setState({ open: true }, () => {
        //         setInterval(() => {
        //             this.setState({ open: false })
        //         }, 3000)
        //     })
        // }
        if (prevProps.match.path !== this.props.match.path) {
            if (!this.props.match.params.id) {
                this.setState({ categoryData: this.state.products, id: "" })
            }
        }
        if (!this.props.match.params.id && this.state.id) {
            this.fetchAPI('products')
        }
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    handleMenuClick = (categoryId) => {
        if (this.state.id !== categoryId) {
            let categorizedData
            this.props.history.push(`/products/${categoryId}`)
            categorizedData = this.state.categoryData.filter(value => {
                return value.category === categoryId
            })
            this.setState({ products: categorizedData, id: categoryId })
        } else {
            this.setState({ products: this.state.categoryData, id: '' })
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
                this.state.categories.map(category => {
                    return (
                        <div style={{ backgroundColor: category.id === this.state.id ? 'orange' : "" }}>{this.processMenu(category.name, category.id)}</div>
                    )
                })
            }
        </div>
    }
    handleOnChange = (e) => {
        this.handleMenuClick(e.target.value)
    }
    processMobileMenuList = () => {
        return <div className="mobile-category-list">
            {
                <select
                    onChange={this.handleOnChange}
                >
                    {
                        this.state.categories.map(category => {
                            return (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )
                        })
                    }
                </select>
            }
        </div>
    }

    processItemGrid = () => {
        return (
            <>
                <div className="item-container">
                    <div className="section">
                        <div></div>
                        <div className="menu-list">
                            {this.processMenuList()}
                        </div>
                        <div style={{ marginTop: '1%', height: '100%' }}>
                            {this.processProductLists(this.state.products)}
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="mobile-item-container">
                    {this.processMobileMenuList()}
                    <div style={{ marginTop: '1%', height: '100%' }}>
                        {this.processProductLists(this.state.products)}
                    </div>
                </div>
            </>
        );
    }
    fetchPostApi = (value) => {
        fetch("http://localhost:5000/addToCart", {
            method: 'post',
            body: JSON.stringify({
                productId: value.id
            })
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(msg => {
                        this.setState({ open: true, message: msg.responseMessage }, () => {
                            this.props.buynow(value)
                            setTimeout(() => {
                                this.setState({ open: false })
                            }, 3000)
                        })
                    })
                }
            })
            .catch(err => console.log(err))
    }
    handleBuyNow = (value) => {
        this.fetchPostApi(value)
    }

    processMobileProductCard = (value) => {
        return (
            <Card key={value.id} style={{ height: '100%', boxShadow: 'none', borderBottom: 'dashed #e7e7ec' }}>
                <div className="mobile-product-name">
                    {value.name}
                </div>
                <div className="mobile-card-media">
                    <div>
                        <CardMedia
                            style={{ backgroundSize: 'contain', height: '20vh', padding: '1.5vh' }}
                            image={value.imageURL}
                            title={value.name}
                        />
                    </div>
                    <div>
                        <div className="description">
                            {value.description}
                        </div>
                        <CardActions style={{ boxSizing: "border-box", fontSize: '0.7rem' }}>
                            <Button
                                onClick={() => this.handleBuyNow(value)}
                                id="buy-now"
                                variant="contained"
                                color="secondary"
                            >
                                {`Buy Now @ MRP Rs.${value.price}`}
                            </Button>
                        </CardActions>
                    </div>
                </div>

            </Card >
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
                        onClick={() => this.handleBuyNow(value)}
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
            <>
                <div className="product-list">
                    {data.map(value =>
                        <div className="product" key={value.id}>
                            {this.processProductCard(value)}
                        </div>
                    )}
                </div>
                <div className="mobile-product-list">
                    {data.map(value =>
                        <div className="mobile-product" key={value.id}>
                            {this.processMobileProductCard(value)}
                        </div>
                    )}
                </div>
            </>
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
                            {this.state.message}
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