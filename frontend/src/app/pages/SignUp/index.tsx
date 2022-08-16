/**
 *
 *
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {}

export const SignUp = memo((props: Props) => {
  return (
    <div>
      <Helmet>
        <title>SignUp</title>
        <meta name="description" content="A Boilerplate application SignUp" />
      </Helmet>
      <span>My SignUp</span>
    </div>
  );
});
