import axios from "axios";
import { useRouter, withRouter } from "next/router";
import { Component } from "react";
import NoProducts from "../../atoms/noProducts";
import someThingWentWrong from "../../atoms/someThingWentWrong";
import CategoryNav from "../../molecules/categoryNavBar";
import Product from "../../molecules/product/index";
import ProductsStyles from "./index.style";
class Products extends Component {


    state = {
        products: [],
        error: false
    }
    componentDidMount() {
        this.getProductsHandler();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Componenet did update")
        if (prevProps.category != this.props.category) {
            this.getProductsHandler()
        }
    }

    getProductsHandler() {
        const category = this.props.category;
        axios.get('http://localhost:5000/products')
            .then(response => {
                const list = response.data;
                if (category) {
                    const productList = list.filter(item => item.category == category);
                    this.setState({ products: productList, error: false });
                }
                else {
                    this.setState({ products: list, error: false });
                }
            })
            .catch(error => {
                console.log('error occured', error);
                this.setState({ error: true });
            });

    }
    categoryChanged(item) {
        console.log('route', item, this.props);
        // this.props.router.push({
        //     pathName:`/products/${item.id}`
        // })
        this.props.router.push(`/products/${item.id}`);


    }

    render() {
        return (
            <ProductsStyles>
                <div className="nav-container">
                    <CategoryNav categorySelect={(item) => { this.categoryChanged(item) }} />
                </div>
                <div className="list-container">
                    {this.state.error &&
                        <someThingWentWrong message ="Unable to Fetch the Products"/>
                    }
                    {
                        this.state.products.length == 0 &&
                        <NoProducts />
                    }
                    {!this.state.error &&
                        this.state.products.map(product => {
                            return (
                                <Product key={product.id} product={product} />
                            )
                        })
                    }
                </div>
            </ProductsStyles>
        )

    }
}
export default withRouter(Products);