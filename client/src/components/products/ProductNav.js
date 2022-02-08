import React, { Component } from 'react';
import axios from 'axios';
import './ProductNav.scss';

  const API_URL = "http://localhost:5000/";

class ProductNav extends Component{
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      loading: false
    }
  }

  getProductNavData = async () => {
    await axios(API_URL+"categories").then(res => this.setState({
      items: res.data,
      loading: false
    }));
  }

  componentDidMount(){
    this.setState({loading: true});
    this.getProductNavData();
  }

  render(){
    let {items} = this.state;
    return(
      <div className="ProductsNav">
        <ul className='category-list'>
          { 
            items.filter(item => item.enabled === true).sort((max, min)=> max.order > min.order ? 1: -1).map(item => {
              return(
                <li key={item.order}className='category'><a href="#home">{item.name}</a></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default ProductNav;