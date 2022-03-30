import React, { Component } from 'react';
import { APIUrls } from '../../helpers/urls';
import { Link } from 'react-router-dom';
import './Homepage.scss';
import CategoryCard from '../CategoryCard';
import Placard from '../Placard';
class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }
  componentDidMount() {
    const url = APIUrls.categories();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        data.sort((a, b) => a.order - b.order);
        this.setState({
          categories: data,
        });
      });
  }
  render() {
    return (
      <div className="home-page-container">
        <Placard />
        <div className="product-categories">
          {this.state.categories.map((category, index) => {
            const position = index % 2 === 0;
            return (
              <CategoryCard
                {...category}
                key={category.id}
                position={!position}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Homepage;
