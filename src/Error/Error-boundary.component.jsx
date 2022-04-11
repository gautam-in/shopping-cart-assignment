import React, { Component } from "react";

export default class Errorboundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    if (error) this.setState({ hasError: true });
    console.log(info);
  }
  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError)
      return (
        <h4 className="d-flex justify-content-center py-4">
          Something went wrong
        </h4>
      );
    return children;
  }
}
