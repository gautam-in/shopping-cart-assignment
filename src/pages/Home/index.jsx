import React, { Component } from "react";
import Carousel from "../../components/Carousel";
import Category from "../../components/Category";
import Loader from "../../components/Spinner";
import { axiosFetch } from "../../services/utils";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      banners: [],
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    // TODO: Error handling
    setTimeout(() => {
      axiosFetch("banners")
        .then((resp) => {
          this.setState({
            banners: resp,
          });
          return axiosFetch("categories");
        })
        .then((resp) => {
          this.setState({
            categories: resp,
            loading: false,
          });
        });
    }, 500);
  }

  render() {
    const categories = this.state.categories
      .filter((category) => category.enabled)
      .sort((a, b) => a.order - b.order);

    return this.state.loading ? (
      <Loader />
    ) : (
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
