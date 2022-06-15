import React, { Component } from "react";
import { Link } from "react-router-dom";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "",
    };
  }
  static getDerivedStateFromProps(prevProps) {
    return {
      src: prevProps.sectionData.imageUrl
        ? prevProps.sectionData.imageUrl
        : prevProps.fallBackSrc,
    };
  }

  render() {
    const { sectionData } = { ...this.props };
    return (
      <div className="categories__item" key={sectionData.key}>
        <div>
          <img
            src={process.env.PUBLIC_URL + this.state.src}
            alt={sectionData.name + "Image"}
          />
        </div>
        <div>
          <h1>{sectionData.name}</h1>
          <p>{sectionData.description}</p>
          <Link to="/products">
            <button type="button" className="btn pointer">
              {`Explore ${sectionData.name}`}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Section;
