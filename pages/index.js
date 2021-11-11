import Homepage from "../components/home";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Sabka Bazaar</title>
      </Head>
      <Homepage />
    </div>
  );
}
