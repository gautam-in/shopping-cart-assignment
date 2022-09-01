/**
 * Asynchronously loads the component for SignIn
 */

import { lazyLoad } from 'utils/loadable';

export const SignIn = lazyLoad(
  () => import('./index'),
  module => module.SignIn,
);
