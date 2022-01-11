import React, { Component } from "react";
import axios from "axios";
import Carousel from "../../components/Carousel";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      banners: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/banners").then((resp) => {
      console.log("From homepage, banners", resp);
      this.setState({
        banners: resp.data,
      });
    });
  }

  render() {
    return (
      <section>
        <Carousel banners={this.state.banners} />
      </section>
    );
  }
}

export default Home;
