import Head from "next/head";
import SignIn from "../components/SignIn";

export default function signin() {
  return (
    <div>
      <Head>
        <title>Sign In | Sabka Bazaar</title>
      </Head>
      <SignIn />
    </div>
  );
}
