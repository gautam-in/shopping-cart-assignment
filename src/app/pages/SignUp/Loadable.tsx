/**
 * Asynchronously loads the component for SignUp
 */

import { lazyLoad } from 'utils/loadable';

export const SignUp = lazyLoad(
  () => import('./index'),
  module => module.SignUp,
);
