import React, { Component } from 'react';
import "./App.scss"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "App"
    }
  };

  handleClick= () => {
    this.setState({
      name: "Application"
    });
  }

  render() {
    return <div onClick={this.handleClick}>Hello {this.state.name}</div>
  };
};

export default App;