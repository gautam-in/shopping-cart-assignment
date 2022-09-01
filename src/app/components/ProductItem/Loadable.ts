/**
 *
 * Asynchronously loads the component for ProductItem
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ProductItem = lazyLoad(
  () => import('./index'),
  module => module.ProductItem,
);
