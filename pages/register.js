import Head from "next/head";
import Register from "../components/Register";

export default function register() {
  return (
    <div>
      <Head>
        <title>Register | Sabka Bazaar</title>
      </Head>
      <Register />
    </div>
  );
}
