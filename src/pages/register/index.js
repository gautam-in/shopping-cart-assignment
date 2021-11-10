import React from 'react';
import Layout from '../../components/Layout';

import Register from './Register';

const RegisterPage = () => {
  return ( 
    <Layout title="Store" description="This is the Register page" >
      <Register />
    </Layout>
  );
};

export default RegisterPage;