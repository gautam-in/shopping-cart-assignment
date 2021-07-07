import AlreadySignedIn from "../components/AlreadySignedIn";
import Layout from "../components/Layout";
import Login from "../components/Login";

export default function login() {
    return (
        <Layout>
            <AlreadySignedIn>
            <Login/>
            </AlreadySignedIn>
        </Layout>
    )
}
