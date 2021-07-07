import Head from 'next/head';
import Login from '../components/Auth/Login'

const login = () => {
    return (
        <>
            <Head>
                <title>Sabka Bazaar | Login</title>
            </Head>
        <Login />
        </>
    )
}

export default login
