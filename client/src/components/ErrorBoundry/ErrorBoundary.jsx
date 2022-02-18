import React from "react";
import classes from "./ErrorBoundary.module.css";

class ErrorBoundary extends React.Component {
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
  componentDidCatch(error, errorInfo) {
    console.log(errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className={classes.error}>
          <p>Something went wrong</p>
          <p>Might be server is not running</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
