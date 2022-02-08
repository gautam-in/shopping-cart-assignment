import React, {Component} from 'react';
import axios from 'axios';
import ProductNav from './ProductNav';
import './Products.scss';

const API_URL = "http://localhost:5000/";

class Products extends Component{
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      loading: false
    }
  }

  getProductsData = async () => {
    await axios(API_URL + "products").then(res => this.setState({
      items: res.data,
      loading: false
    }));
  }

  componentDidMount(){
    console.log("Mounting");
    this.setState({loading: true});
    this.getProductsData();
  }
  render(){
    let {items} = this.state;
    return(
      <div className="Products">
        <nav className='products-nav'>
          <ProductNav/>
        </nav>
        <article className="products">
          <ul className="products-items">
            {
              items.map(item => {
                return(
                  <li className='item-product' key={item.id}>
                    <h1>{item.name}</h1>
                    <img src={process.env.PUBLIC_URL + item.imageURL} alt="product" />
                    <p>{item.description}</p>
                    <div className="price">
                      <span className='mrp'>MRP Rs {item.price}</span>
                      <button>
                        <span className='btn-buynow'>Buy Now</span>
                        <span className='button-text'>@ Rps {item.price}</span>
                      </button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </article>
      </div>
    )
  }
}

export default Products;