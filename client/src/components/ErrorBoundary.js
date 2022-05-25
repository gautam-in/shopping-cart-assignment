import React, { Component } from "react";

import ErrorMessage from "./ErrorMessage";

export class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = { hasError: false };
  }

  updateErrorStatus = () => {
    this.state = { hasError: false };
    console.log(this.state.hasError);
  };

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
