import React, { Component } from 'react';
import axios from 'axios';
import './Categories.scss';

const API_URL = "http://localhost:5000/";

class Categories extends Component{
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      loading: false
    }
  }

  getCategoriesData = async () => {
    await axios(API_URL+"categories").then(res => this.setState({
      items: res.data,
      loading: false
    }));
  }

  componentDidMount(){
    this.setState({loading: true});
    this.getCategoriesData();
  }

  render(){
    let {items} = this.state;
    return(
      <article className="categories">
        <section className='categories-items'>
          {
            items.filter(item => item.enabled === true).sort((max, min)=> max.order > min.order ? 1: -1).map(item => {
              return (
                <div className="item" key={item.order}>
                  <img
                    src={process.env.PUBLIC_URL + item.imageUrl}
                    alt={item.name}
                  />
                  <section>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <button>Explore {item.key}</button>
                  </section>
                </div>
              )
            })
          } 
        </section>
      </article>
    )
  }
}

export default Categories;