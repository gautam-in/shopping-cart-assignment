import React, { Component } from 'react';

class Error404 extends Component {
  render() {
    return (
        <>
        <div className="container top-container">
          <div className="row">
              <div className="col-md-12 pd-3">
                <h1>404: Not Found</h1>
                <br/>
                <p>
                    The page you're looking for is not found!
                </p>
              </div>
          </div>
        </div>
        </>
    );
  }
}

export default Error404;