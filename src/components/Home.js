import React, { Component } from "react";
import axios from "axios";
import HomeBanners from "./HomeBanners";
import { isEmpty } from "lodash";
import Loading from "../commonData/Loading";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bannerList: [],
      categiryList: [],
      noDataText: "",
      showAPILoader: false,
    };
  }

  componentDidMount() {
    this.bannerListData();
    this.categiriesListData();
  }

  bannerListData = () => {
    axios.get(`http://localhost:5000/banners`).then((res) => {
      if (res && res.status === 200) {
        const response = res.data;
        this.setState({
          bannerList: response,
        });
      } else {
        this.setState({
          bannerList: [],
        }).catch((err) => {
          this.setState({
            noDataText: "Data Not Avaliable",
          });
        });
      }
    });
  };

  categiriesListData = () => {
    this.setState({
      showAPILoader: true,
    });
    axios
      .get(`http://localhost:5000/categories`)
      .then((res) => {
        if (res && res.status === 200) {
          const response = res.data;
          this.setState({ categiryList: response, showAPILoader: false });
        } else {
          this.setState({
            categiryList: [],
            noDataText: "Data Not Avaliable",
            showAPILoader: false,
          });
        }
      })
      .catch((err) => {
        this.setState({
          noDataText: "Something went wrong Please Try Again Later!",
          showAPILoader: false,
        });
      });
  };

  handleExplore = (categoryId) => {
    this.props.history.push(`/products#${categoryId}`);
  };

  render() {
    return (
      <main>
        {!isEmpty(this.state.bannerList) ? (
          <HomeBanners bannerList={this.state.bannerList} />
        ) : (
          <p></p>
        )}
        {this.state.showAPILoader ? (
          <Loading />
        ) : !isEmpty(this.state.categiryList) ? (
          <ul className="category-list">
            {this.state.categiryList.map((category) => (
              <li key={category.id} className="category">
                <article className="category-details">
                  <div className="category-title">{category.name}</div>
                  <div className="category-description">
                    {category.description}
                  </div>
                  <button
                    type="button"
                    className="category-explore-button"
                    onClick={() => this.handleExplore(category.id)}
                    tabIndex={0}
                    disabled={!category.enabled}
                    onKeyPress={() => this.handleExplore(category.id)}
                  >
                    Explore {category.name}
                  </button>
                </article>
                <article className="category-right">
                  <img
                    className="category-image"
                    src={category.imageUrl}
                    alt={category.name}
                    height="150"
                    width="200"
                  />
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <h2
            style={{
              textAlign: "center",
              height: "70vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {this.state.noDataText
              ? this.state.noDataText
              : "Data Not Avaliable"}
          </h2>
        )}
      </main>
    );
  }
}

export default Home;
