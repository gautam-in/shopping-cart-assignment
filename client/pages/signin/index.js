import Head from 'next/head'
import React from 'react'
import SignIn from '../../components/SignIn'

export default function SignInPage() {
    return (
        <div>
            <Head>
             <title>Sabka Bazar - Signin</title>
            </Head>
          <SignIn />
        </div>
    )
}
