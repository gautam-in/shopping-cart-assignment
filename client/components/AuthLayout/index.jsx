import React from 'react'

export default function AuthLayout(props) {
    return (
        <main className='auth-layout'>
            <section>
                <h1>Signup</h1>
                <span>We do not share your personal details with anyone.</span>
            </section>
            <section className='register-form'>
                {props.children}
            </section>
        </main>
    )
}
