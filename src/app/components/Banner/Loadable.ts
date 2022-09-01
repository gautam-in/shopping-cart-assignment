/**
 *
 * Asynchronously loads the component for Banner
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Banner = lazyLoad(
  () => import('./index'),
  module => module.Banner,
);
