import React, { Component } from 'react';

import Footer from "./Footer"

class About extends Component {
  render() {
    return (
        <>
        <div className="container">
          <article className="row">
              <div className="col">
                <h1>About</h1>
                <br/>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
          </article>
        </div>
        <Footer />
        </>
    );
  }
}

export default About;