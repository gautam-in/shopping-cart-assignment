import React from "react";
import Header from "./container/Header/Header";
import "./App.scss";
import * as Constants from "./global-constants";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawerOpen: false,
      screenSize: window.matchMedia(`(min-width: ${Constants.ScreenLaptop})`)
        .matches
        ? Constants.ScreenLaptop
        : window.matchMedia(`(min-width: ${Constants.ScreenTablet})`).matches
        ? Constants.ScreenTablet
        : Constants.ScreenMobile,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = (event) => {
    this.setState(
      {
        screenSize: window.matchMedia(`(min-width: ${Constants.ScreenLaptop})`)
          .matches
          ? Constants.ScreenLaptop
          : window.matchMedia(`(min-width: ${Constants.ScreenTablet})`).matches
          ? Constants.ScreenTablet
          : Constants.ScreenMobile,
      },
      () => {
        if (
          this.state.isDrawerOpen &&
          (this.state.screenSize === Constants.ScreenMobile ||
            this.state.screenSize === Constants.ScreenTablet)
        ) {
          this.toggleDrawer(false)(event);
          this.props.history.push("/" + Constants.UrlCart);
        }
        // if (this.props.location.pathname === ('/' + Constants.UrlCart)
        //   && this.state.screenSize === Constants.ScreenLaptop) {
        //   this.toggleDrawer(true)(event);
        //   this.props.history.goBack();
        // }
      }
    );
  };

  toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.setState({
      isDrawerOpen: open,
    });
  };

  render() {
    return (
      <div className="app">
        <Header screenSize={this.state.screenSize} />
        <div>Herer</div>
      </div>
    );
  }
}

export default App;
