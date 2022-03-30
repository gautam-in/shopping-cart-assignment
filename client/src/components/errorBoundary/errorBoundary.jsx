import React, { Component } from "react";
import { ReactComponent as ErrorIcon } from "../../assets/error.svg";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-msg-body">
          <div className="mb-3">
            <ErrorIcon />
          </div>
          <p className="text-danger font-weight-bold display-4 mb-0">
            Something went wrong!
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
