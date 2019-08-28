import {
  elements
} from './base';

import {
  servicesData
} from '../models/Services';

export const renderCartCount = () => {
  elements.cartItemCount.innerHTML = servicesData.cartStatus.cartDetails.totalItemCount + ' Items';
};
