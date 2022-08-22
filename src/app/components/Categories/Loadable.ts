/**
 *
 * Asynchronously loads the component for Categories
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Categories = lazyLoad(
  () => import('./index'),
  module => module.Categories,
);
