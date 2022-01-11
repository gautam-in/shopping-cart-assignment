import React, { Component } from "react";
import Carousel from "../../components/Carousel";
import Category from "../../components/Category";
import { axiosFetch } from "../../services/utils";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      banners: [],
      categories: [],
    };
  }

  componentDidMount() {
    // TODO: Error handling
    axiosFetch("banners").then((resp) => {
      this.setState({
        banners: resp,
      });
    });
    axiosFetch("categories").then((resp) => {
      this.setState({
        categories: resp,
      });
    });
  }

  render() {
    const categories = this.state.categories
      .filter((category) => category.enabled)
      .sort((a, b) => a.order - b.order);

    return (
      <section>
        {/* Banner Carousel */}
        <Carousel banners={this.state.banners} />
        {/* Category Banners */}
        <article className="categories">
          {categories.length > 0 &&
            categories.map((category, index) => (
              <Category key={category.key} idx={index} category={category} />
            ))}
        </article>
      </section>
    );
  }
}

export default Home;
