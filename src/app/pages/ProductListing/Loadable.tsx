/**
 * Asynchronously loads the component for ProductListing
 */

import { lazyLoad } from 'utils/loadable';

export const ProductListing = lazyLoad(
  () => import('./index'),
  module => module.ProductListing,
);
