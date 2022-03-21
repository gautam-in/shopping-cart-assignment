import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console(error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something Went wrong</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
