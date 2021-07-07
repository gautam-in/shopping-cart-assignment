import AlreadySignedIn from "../components/AlreadySignedIn";
import Layout from "../components/Layout";
import SignUp from "../components/SignUp";

export default function signup() {
    return (
        <Layout>
            <AlreadySignedIn>
                <SignUp />
            </AlreadySignedIn>
        </Layout>
    )
}
