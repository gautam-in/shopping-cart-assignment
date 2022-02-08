import React, { Component } from 'react';
import axios from 'axios';
import Categories from '../home/Categories';
import Products from './Products';

const API_URL = "http://localhost:5000/";

class ProcustAccordian extends Component{
  constructor(props){
    super(props);
    this.state = {
      categories:[],
      products:[],
      loading: false
    }
  }

  getProductNavData = async () => {
    await axios(API_URL+"categories").then(res => this.setState({
      categories: res.data,
      loading: false
    }));
  }

  getProductsData = async () => {
    await axios(API_URL + "products").then(res => this.setState({
      products: res.data,
      loading: false
    }));
  }

  componentDidMount(){
    this.setState({loading: true});
    this.getProductNavData();
    this.getProductsData();
  }

  render(){
    const {products, categories} = this.state;
    return(
      <div className='products-accordian'>
        {
          categories.filter(categories.enabled == true).sort((max, min)=> max.order > min.order ? 1: -1)
            .map(category => {
              return(
                <article className="card">
                  <section className='card-header'>
                    <h5 class="mb-0">
                      <button class="btn btn-link" data-toggle="collapse" data-target={category.id} aria-expanded="true" aria-controls={category.id}>
                        {category.name}
                      </button>
                    </h5>
                  </section>
                  <section className="collapse show" id={category.id} aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                      <Products category={Categories.id} />
                    </div>
                  </section>
                </article>

              )
            })
        }
      </div>
    )
  }
}

export default ProcustAccordian;

