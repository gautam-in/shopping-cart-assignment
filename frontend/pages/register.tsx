import React from 'react'
import Layout from '../components/Layout'
import RegisterForm from '../components/Register/RegisterForm'

const register = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24 md:pt-20 mb-8">
        <div className="col-span-1 md:ml-auto ml-6">
          <h1 className="text-4xl text-slate-900 font-semibold">Signup</h1>
          <p className="text-normal text-slate-700 mt-2 mb-4">
            We do not share your personal details with anyone
          </p>
        </div>
        <RegisterForm />
      </div>
    </Layout>
  )
}

export default register
