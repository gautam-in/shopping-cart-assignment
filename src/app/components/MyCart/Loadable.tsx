/**
 * Asynchronously loads the component for MyCart
 */

import { lazyLoad } from 'utils/loadable';

export const MyCart = lazyLoad(
  () => import('./index'),
  module => module.MyCart,
);
