import React, { Component } from "react";
// import { connect } from 'react-redux';

import Aux from "../Aux/Aux";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

export default class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />

        <main className={classes.Content}>{this.props.children}</main>
        <footer>
          <div className={classes.FooterWrapper}>
            Copyright © 2011 - 2018 Sabka Bazaar Grocery Supplies Pvt Ltd
          </div>
        </footer>
      </Aux>
    );
  }
}

// const mapStateToProps = state => {
//     return {
//         isAuthenticated: state.auth.token !== null
//     };
// };

// export default connect( mapStateToProps )( Layout );
