import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      catchError: false,
    };
  }

  async componentDidCatch(error, Info) {
    await this.setState({
      hasError: true,
      catchError: error,
    });
  }
  /**
   * @description dashboardRedirect func triggres
   */
  dashboardRedirect = () => {
    window.location.href = "/";
  };

  reloadClick() {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <button
            id="dashboard_redirect"
            onClick={this.dashboardRedirect}
            type="reset"
          />
        </div>
      );
    }
    return this.props.children;
  }
}
