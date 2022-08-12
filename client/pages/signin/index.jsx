import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import AuthLayout from '../../components/AuthLayout';
import { PrimaryButton } from '../../components/Button';
import TextBox from '../../components/Textbox';

export default function Signin() {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Sign In</title>
            </Head>
            <AuthLayout>
                <form action='/'>
                    <TextBox
                        title="Email"
                        type="email"
                        id="email" />
                    <TextBox
                        title="Password"
                        type="password"
                        id="password" />
                    <PrimaryButton type="submit">Sign In</PrimaryButton>
                </form>
            </AuthLayout>
        </>
    )
}
