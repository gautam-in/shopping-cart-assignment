import { Component } from 'react';
import { connect } from 'react-redux';
import NavigationItem from '../../atom/NavigationItem'
import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavbarText,
} from 'reactstrap';

import {
   toggleCart,
} from '../../../redux_store/cart/actions';


// Redux State Configutration
const mapStateToProps = state => ({   
   cartItems: state.cart.items,
});

// Redux Dispatch Configutration
const mapDispatchToProps = {   
   toggleCart: toggleCart,
};

class Navigation extends Component {
   state = {
      isOpen: false,
   }

   constructor(props) {
      super(props);
   }

   toggleHamburger = () => {
      this.setState({
         isOpen: !this.state.isOpen
      })
   }

   render() {
      const { isOpen} = this.state
      return (
         <Navbar className="shadow_grey mb-3" light expand="lg">
            <NavbarBrand href="/">
               <img src="/static/images/logo.png" alt="Sabka Bazar" width="120" height="60" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleHamburger} />
            <Collapse isOpen={isOpen} navbar>
               <Nav className="mr-auto" navbar>
                  <NavigationItem link="/" >
                     Home
                  </NavigationItem>
                  <NavigationItem link="/product-list/" >
                     Products
                  </NavigationItem>
               </Nav>
               <NavbarText>
                  <div className="header">
                     <div className="row-1">
                        <Nav className="mr-auto" navbar>
                           <NavigationItem link="/login/"  >
                              Signup
                           </NavigationItem>
                           <NavigationItem link="/signup/" >
                              Register
                           </NavigationItem>
                        </Nav>
                     </div>
                     <Navbar bg="light" expand="md" onClick={this.props.toggleCart} className="cursor-pointer">
                        <img src="/static/images/cart.svg" alt="me" width="auto" height="24" />&nbsp; {this.props.cartItems?.length} items
                     </Navbar>
                  </div>
               </NavbarText>
            </Collapse>
         </Navbar>

      )
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

