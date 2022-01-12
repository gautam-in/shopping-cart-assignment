import React, { Component } from "react";
import Loader from "../../components/Spinner";
import Toast from "../../components/Toast";
import { axiosFetch } from "../../services/utils";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      categories: [],
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      axiosFetch("categories")
        .then((resp) => {
          this.setState({
            categories: resp,
            error: false,
          });
          return axiosFetch("products");
        })
        .then((resp) => {
          this.setState({
            products: resp,
            loading: false,
            error: false,
          });
        })
        .catch((err) => {
          this.setState({
            products: [],
            categories: [],
            loading: false,
            error: true,
          });
        });
    }, 300);
  }

  closeToast = () => {
    this.setState({
      error: false,
    });
  };

  render() {
    return (
      <>
        {this.state.loading ? <Loader /> : <section>Product</section>}
        {this.state.error && (
          <Toast
            toastType="error"
            textMessage="Sorry something went wrong!"
            closeToast={this.closeToast}
          />
        )}
      </>
    );
  }
}

export default Products;
