// File: pages/PageHeader/index.js

import React, { Component } from 'react';

import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
      NavbarText,
} from 'reactstrap';
import { connect } from 'react-redux';
// import {
//       fetchBanner,
//       nextSlide,
//       prevSlide,
//       gotoSlideIndex,
//       animatingSlide,
//       animationDone,
// } from '../../redux_store/pages/Home/actions/homePageActions';

// Redux State Configutration
const mapStateToProps = state => ({
      // activeIndex: state.HomePage.activeIndex,
      // animating: state.HomePage.animating,
      // loadingBanner: state.HomePage.loadingBanner,
      // items: state.HomePage.items,
});

// Redux Dispatch Configutration
const mapDispatchToProps = {
      // prevSlide: prevSlide,
      // nextSlide: nextSlide,
      // gotoSlideIndex: gotoSlideIndex,
      // animatingSlide: animatingSlide,
      // animationDone: animationDone,
      // fetchBanner: fetchBanner,
};

// Next Component
class PageHeader extends Component {
      state = {
            isOpen: false,
      }

      static getInitialProps({ store }) {
      }

      constructor(props) {
            super(props);
      }

      componentDidMount() {
            // this.props.fetchBanner();
      }

      toggleHamburger = () => {
            this.setState({
                  isOpen: !this.state.isOpen
            })
      }

      render() {
            const {isOpen} = this.state
            return (
                  <>
                        <Navbar className="shadow_grey mb-3" light expand="lg">
                              <NavbarBrand href="/">
                                    <img src="/static/images/logo.png" alt="Sabka Bazar" width="120" height="60" />
                              </NavbarBrand>
                              <NavbarToggler onClick={this.toggleHamburger} />
                              <Collapse isOpen={isOpen} navbar>
                                    <Nav className="mr-auto" navbar>
                                          <NavItem>
                                                <NavLink href="/">Home</NavLink>
                                          </NavItem>
                                          <NavItem>
                                                <NavLink href="/products-page/">Products</NavLink>
                                          </NavItem>
                                    </Nav>
                                    <NavbarText>
                                          <div className="header">
                                                <div className="row-1">
                                                      <Nav className="mr-auto" navbar>
                                                            <NavItem>
                                                                  <NavLink href="/signup/">Signup</NavLink>
                                                            </NavItem>
                                                            <NavItem>
                                                                  <NavLink href="/register/">Register</NavLink>
                                                            </NavItem>
                                                      </Nav>
                                                </div>
                                                <Navbar bg="light" expand="md">
                                                      <img src="/static/images/cart.svg" alt="me" width="auto" height="24" />&nbsp; 0 items
                                                </Navbar>
                                          </div>
                                    </NavbarText>
                              </Collapse>
                        </Navbar>
                  </>
            )
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);

// File: pages/PageHeader/index.js
