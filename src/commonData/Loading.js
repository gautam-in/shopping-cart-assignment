import React, { Component } from "react";
import { BiRefresh } from "react-icons/bi";

class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section>
        <figure
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
            width: "100%",
          }}
        >
          <BiRefresh className="loadingIcon" />
        </figure>
      </section>
    );
  }
}

export default Loading;
