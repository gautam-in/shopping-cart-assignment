import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import AuthLayout from '../../components/AuthLayout';
import { PrimaryButton } from '../../components/Button';
import TextBox from '../../components/Textbox';

export default function Rsgiter() {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <AuthLayout>
                <form onSubmit={() => router.push("/")}>
                    <TextBox
                        title="First Name"
                        id="firstname" />
                    <TextBox
                        title="Last Name"
                        id="lastname" />
                    <TextBox
                        title="Email"
                        type="email"
                        id="email" />
                    <TextBox
                        title="Password"
                        type="password"
                        id="password" />
                    <TextBox
                        title="Confirm Password"
                        type="password"
                        id="confirmPassword" />
                    <PrimaryButton type="submit">Signup</PrimaryButton>
                </form>
            </AuthLayout>
        </>
    )
}
