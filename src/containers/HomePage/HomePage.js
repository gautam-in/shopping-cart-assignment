import React, { Component } from "react";
import { connect } from "react-redux";
import Carousal from "../../components/Carousel/Carousel";
import HomeCard from "../../components/HomeCard/HomeCard";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import axios from "../../axios-orders";
import classes from "./HomePage.css";

class Home extends Component {
  componentDidMount() {
    this.props.onFetchBanners();
    this.props.onFetchCategories();
  }
  categorySelectHandler = (id, name) => {
    this.props.onSelectCategory(id, name);
    this.props.history.push("/product");
  };
  render() {
    let homePage = <Spinner />;
    if (!this.props.loading) {
      homePage = [];
      let banners =
        this.props.banners && this.props.banners.length >= 0 ? (
          <Carousal key="Carousal" banners={this.props.banners} />
        ) : null;
      let categories =
        this.props.categories && this.props.categories.length >= 0 ? (
          <HomeCard
            key="HomeCard"
            categories={this.props.categories}
            categorySelectHandler={this.categorySelectHandler}
          />
        ) : null;
      homePage.push(banners);
      homePage.push(categories);
    }
    return <div className={classes.HomeContainer}>{homePage}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    banners: state.home.banners,
    categories: state.home.categories,
    loading: state.home.loading,
    categoryId: state.home.categoryId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBanners: () => dispatch(actions.fetchBanners()),
    onFetchCategories: () => dispatch(actions.fetchCategories()),
    onSelectCategory: (id, name) => dispatch(actions.selectCategory(id, name)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Home, axios));
