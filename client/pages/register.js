import Head from 'next/head';
import Register from '../components/Auth/Register'

const register = () => {
    return (
        <>
            <Head>
                <title>Sabka Bazaar | Register</title>
            </Head>
            <Register />
        </>
    )
}

export default register
