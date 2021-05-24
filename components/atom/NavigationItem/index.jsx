import { Component } from 'react';

import {
   NavItem,
} from 'reactstrap';

import ActiveLink from "../ActiveLink"

class NavigationItem extends Component {

   render() {
      const { children, link } = this.props
      return (
         <NavItem>
            <ActiveLink href={link}>{children}</ActiveLink>
         </NavItem>
      )
   }
}

export default NavigationItem;