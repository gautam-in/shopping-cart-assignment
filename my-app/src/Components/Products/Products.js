import React from "react"
import Services from "../../Services/service";
import { connect } from "react-redux";
import { addItemToCart, totalItemsCost, itemQuantity } from "../../Redux/Cart-Action";
import "./products.css"
import { Select } from "antd";
import Footer from "../Footer/footer";
const { Option } = Select;

class Products extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            products: [],
            duplicateProducts: [],
            selectedcategoryId: "",
            selectedcategoryName: ""
        }
        this.carousel = React.createRef();
        this.Services = new Services()
    }

    componentDidMount() {
        this.Services.getCategories().then((data) => {
            console.log(data);
            this.setState({ categories: data.data }, () => {
                console.log(this.state.categories);
            })
        })

        this.Services.getProducts().then((data) => {
            console.log(data);
            this.setState({ products: data.data, duplicateProducts: data.data }, () => {
                console.log(this.state.products);
            })
        })
    }

    categoryDetails = (details) => {
        console.log(details);
        if (this.state.selectedcategoryId === details.id) {
            this.setState({ products: this.state.duplicateProducts, selectedcategoryId: "" })
        }
        else {
            let selectedProducts = this.state.duplicateProducts.filter((data) => {
                if (data.category === details.id) {
                    return data
                }
            })
            // console.log("selectedProducts", selectedProducts);
            this.setState({ products: selectedProducts, selectedcategoryId: details.id, selectedcategoryName: details.name })
        }
    }

    categoryDropDetails = (id) => {
        console.log(id);
        if (this.state.selectedcategoryId === id) {
            this.setState({ products: this.state.duplicateProducts, selectedcategoryId: "" })
        }
        else {
            let selectedProducts = this.state.duplicateProducts.filter((data) => {
                if (data.category === id) {
                    return data
                }
            })

            let categoryname = this.state.categories.filter((data) => {
                if (data.id === id) {
                    return data.name
                }
            })

            this.setState({ products: selectedProducts, selectedcategoryId: id, selectedcategoryName: categoryname[0].name })
        }
    }

    SelectedItem = (product) => {
        this.Services.postProductDetails(product.id).then((data) => {
            if (data.data.response === "Success") {
                this.props.addItem(product)
                this.props.totalItemsCost()
                this.props.itemQuantity()
            }
        })

    }


    render() {
        return (
            <header tabIndex={"0"}>
                <article className="container">
                    <div className="flex-container" >
                        <section className="dropdown-section">
                            <Select className="antd-select" placeholder={"Please select category"} onChange={this.categoryDropDetails.bind(this)} style={{ width: "100%" }}>
                                {this.state.categories.map((category, key) => (
                                    <Option value={category.id}>{category.name}</Option>
                                ))}
                            </Select>
                        </section>
                        <section className="section-1">
                            {this.state.categories.map((category, key) => {
                                return (
                                    <div className="listOfCat" tabIndex={"0"}>
                                        <p onClick={this.categoryDetails.bind(this, category)}>{category.name}</p>
                                        <hr />
                                    </div>
                                )
                            })}
                        </section>

                        <section className="section-2">
                            {this.state.products.length ? this.state.products.map((product) => {
                                return (
                                    <div className="menu-item">
                                        <div className="product-main-title">
                                            <p tabIndex={"0"} className="product-title">{product.name}</p>
                                        </div>
                                        <div className="product-main-img">
                                            <img className="product-image" src={product.imageURL} alt={product.sku} />
                                        </div>
                                        <div className="product-description-main-price">
                                            <p className="description">{product.description}</p>
                                        </div>
                                        <footer className="footer-content">
                                            <p tabIndex={"0"} className="price">MRP Rs.{product.price}</p>
                                            <button className="buy-button" onClick={() => this.SelectedItem(product)}>Buy Now</button>
                                        </footer>
                                        <footer className="footer-content-btn">
                                            <button className="buy-content-button" onClick={() => this.SelectedItem(product)}>Buy Now @ MRP Rs.{product.price}</button>
                                        </footer>
                                    </div>
                                )
                            }) : <p className="no-products">No products to show for {this.state.selectedcategoryName} category</p>}
                        </section>
                    </div>
                </article>
                <div>
                    <Footer />
                </div>
            </header>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item)),
    totalItemsCost: () => dispatch(totalItemsCost()),
    itemQuantity: () => dispatch(itemQuantity())
})
export default connect(null, mapDispatchToProps)(Products)