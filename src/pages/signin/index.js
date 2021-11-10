import React from 'react';
import Layout from '../../components/Layout';

import SignIn from './SignIn';

const SignInPage = () => {
  return (
    <Layout title="Signin" description="This is the Signin page" >
      <SignIn />
    </Layout>
  );
};

export default SignInPage;