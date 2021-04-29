import { Component } from 'react';

import {
   NavItem,
   NavLink,
} from 'reactstrap';

class NavigationItem extends Component {

   render() {
      const { children, link } = this.props
      return (
         <NavItem>
            <NavLink href={link}>{children}</NavLink>
         </NavItem>
      )
   }
}

export default NavigationItem;