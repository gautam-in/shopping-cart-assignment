import { Component } from 'react';
import CartModal from '../CartModal';
import Navigation from '../../molecules/Navigation'

// Next Component
class PageHeader extends Component {
   render() {
      return (
         <>
            <Navigation />
            <CartModal />
         </>
      )
   }
}

export default PageHeader;
