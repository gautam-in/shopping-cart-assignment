import React, { Component } from "react";
import "../css/style.css";
import Section from "./section";
import Carousal from "./carousal";
import Footer from "./footer";
import axios from "axios";
import Header from "./header";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeData: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8080/categories").then((res) => {
      this.setState({
        homeData: res.data,
      });
    });
  }

  render() {
    const { homeData } = { ...this.state };
    return (
      <div className="homeBody">
        <Header />
        <main className="mainContainer">
          <Carousal />
          <section className="categories">
            {homeData.length &&
              homeData.map((el) => (
                <Section sectionData={el} fallBackSrc={homeData[0].imageUrl} />
              ))}
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
