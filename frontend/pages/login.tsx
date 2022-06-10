import React from 'react'
import Layout from '../components/Layout'
import LoginForm from '../components/Login/LoginForm'
import Head from 'next/head'

const Login = () => {
  return (
    <Layout>
      <Head>
        <title>Login - Sabka Bazaar</title>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24 md:pt-20 mb-8">
        <div className="col-span-1 md:ml-auto ml-6">
          <h1 className="text-4xl text-slate-900 font-semibold">Login</h1>
          <p className="text-normal text-slate-700 mt-2 mb-4">
            Get access to your Orders, Wishlist and Recommendations
          </p>
        </div>
        <LoginForm />
      </div>
    </Layout>
  )
}

export default Login
